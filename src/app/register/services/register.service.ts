import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { from } from 'rxjs'
import { environment } from '../../../environments/environment'
import { campaignPayload } from '../../utils'
import { RegisterFormInput, RegisterResponse } from '../models'

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  letextoUrl = environment.production
    ? environment.letextourl
    : '/api/v1/campaigns'

  constructor(private firestore: AngularFirestore, private http: HttpClient) {}

  register(data: RegisterFormInput) {
    return from(
      this.firestore
        .collection('participants')
        .add({
          ...data,
          paymentStatus: 'NOTPAID',
          paymentAmount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        .then(() => {
          this.initSmsSending(data.phoneNumber)
          return this.buildResponse(
            'success',
            'Votre inscription a été prise en compte'
          )
        })
        .catch(() =>
          this.buildResponse(
            'error',
            "Une erreur s'est produite lors de votre inscription"
          )
        )
    )
  }

  private buildResponse(
    status: 'error' | 'success',
    message: string
  ): RegisterResponse {
    return {
      status,
      message,
    }
  }

  initSmsSending(recipientPhoneNumber: string) {
    campaignPayload.recipients.push({ phone: recipientPhoneNumber } as never)
    campaignPayload.message = environment.message
    const payload = campaignPayload
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.letextokey}`,
    })
    return this.http
      .post<{ id: string }>(this.letextoUrl, payload, {
        headers: headers,
      })
      .subscribe(res => this.finishSmsSending(res.id))
  }

  finishSmsSending(id: string) {
    return this.http
      .post(
        `${this.letextoUrl}/${id}/schedules`,
        {},
        {
          headers: {
            Authorization: `Bearer ${environment.letextokey}`,
          },
        }
      )
      .subscribe()
  }
}
