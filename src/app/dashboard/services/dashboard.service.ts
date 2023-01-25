import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { map, Observable, of } from 'rxjs'
import { Participant, PaymentStatus } from '../../models'

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  participants: Observable<Participant[]> = of([])

  constructor(private firestore: AngularFirestore) {
    this.participants = firestore
      .collection<Participant>('participants')
      .valueChanges()
  }

  getParticipants() {
    return this.participants
  }

  getParticipantsByStatus(status: PaymentStatus) {
    return this.participants.pipe(
      map(participants =>
        participants.filter(participant => participant.paymentStatus === status)
      )
    )
  }

  getParticipantsByPhoneNumber(phoneNumber: string) {
    return this.participants.pipe(
      map(participants =>
        participants.filter(participant =>
          participant.phoneNumber.includes(phoneNumber)
        )
      )
    )
  }
}
