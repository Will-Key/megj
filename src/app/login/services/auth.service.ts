import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData!: User
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', 'null');
      }
    })
  }

  login(email: string, password: string) {
    return from(
      this.auth
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.setUserData(result.user!)
          return result.user
        }).catch(() => null)
    )
  }

  setUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(
      `users/${user.uid}`
    )
    const userData: User = {
      uid: user.uid,
      email: user.email
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  signOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user')
    })
  }
}
