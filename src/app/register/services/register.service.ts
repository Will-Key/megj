import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { catchError, EMPTY, from, map } from 'rxjs'
import { environment } from '../../../environments/environment'
import { campaignPayload } from '../../utils'
import { RegisterFormInput, RegisterResponse } from '../models'

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private firestore: AngularFirestore, private http: HttpClient) {}

  register(data: RegisterFormInput) {
    return from(
      this.firestore
        .collection('participants')
        .add({
          ...data,
          paymentStatus: 'NOTPAID',
          paymentAmount: 0,
        })
        .then(() => {
          console.log('compte créé')
          this.sendInfoSms(data.phoneNumber)
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

  sendInfoSms(recipientPhoneNumber: string) {
    console.log('Envoi du message')
    this.initSmsSending(recipientPhoneNumber)
      .then(() => {
        console.log('envoie sms effectué')
      })
      .catch(() => {
        console.log('envoie sms échoué')
      })
  }

  async initSmsSending(recipientPhoneNumber: string) {
    console.log('initialisaion')
    campaignPayload.recipients.push({ phone: recipientPhoneNumber } as never)
    campaignPayload.message = environment.message
    const payload = campaignPayload
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.letextokey}`,
    })
    return await this.http
      .post<{ id: string }>('/api/v1/campaigns', payload, {
        headers: headers,
      })
      .subscribe(res => this.finishSmsSending(res.id))
  }

  finishSmsSending(id: string) {
    console.log('finalisation ', id)
    return this.http
      .post(
        `/api/v1/campaigns/${id}/schedules`,
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
