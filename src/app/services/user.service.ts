import { Injectable } from '@angular/core';
import { Firestore, deleteDoc, doc, getDocs, setDoc } from '@angular/fire/firestore';
import { User } from '../models/user.model';
import { addDoc, collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private firetore: Firestore) { }


  async createUser(user: User){
     const userRef =collection(this.firetore, 'users');
     return addDoc(userRef, user)
  }

  async getUsers(): Promise<User[]> {
    const usersRef = collection(this.firetore, 'users');
    const querySnapshot = await getDocs(usersRef);
    return querySnapshot.docs.map(doc => doc.data()) as User[];
  }

  async deleteUser(userId: string): Promise<void> {
    const userRef = doc(this.firetore, 'users', userId);
    await deleteDoc(userRef);
  }

  async updateUser(userId: string, updatedUser: User): Promise<void> {
    const userRef = doc(this.firetore, 'users', userId);
    await setDoc(userRef, updatedUser, { merge: true });
  }
}
