import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
import { RegisterFormInput, RegisterResponse } from '../register/models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  addParticipant(data: RegisterFormInput) {
    return from(
      this.firestore.collection('participants').add({
        ...data,
        paymentStatus: 'NOTPAID',
        paymentAmount: 0
      }).then(
        () => ({
          status: 'success',
          message: 'Votre inscription a été prise en compte'
        } as RegisterResponse)
      ).catch(
        () => ({
          status: 'error',
          message: 'Une erreur s\'est produite lors de votre inscription'
        } as RegisterResponse)
      )
    )
  }
}
