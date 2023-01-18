import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
import { RegisterFormInput, RegisterResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private firestore: AngularFirestore) { }

  register(data: RegisterFormInput) {
    return from(
      this.firestore.collection('participants').add({
        ...data,
        paymentStatus: 'NOTPAID',
        paymentAmount: 0
      }).then(
        () => this.buildResponse('success', 'Votre inscription a été prise en compte')
      ).catch(
        () => this.buildResponse('error', 'Une erreur s\'est produite lors de votre inscription')
      )
    )
  }

  buildResponse(status: 'error' | 'success', message: string): RegisterResponse {
    return {
      status,
      message
    }
  }
}
