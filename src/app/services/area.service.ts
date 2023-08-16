import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, updateDoc, deleteDoc, getDocs, query, where, QuerySnapshot } from 'firebase/firestore';
import { Area } from '../models/area.model';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private firestore: Firestore) { }

  async createArea(area: Area): Promise<string> {
    const areaRef = collection(this.firestore, 'areas');
    const docRef = await addDoc(areaRef, area);
    return docRef.id;
  }

  async getAreas(): Promise<Area[]> {
    const areasRef = collection(this.firestore, 'areas');
    const querySnapshot = await getDocs(areasRef);
    const areas: Area[] = [];
    querySnapshot.forEach((doc) => {
      const area = doc.data() as Area;
      area.id = doc.id;
      areas.push(area);
    });
    return areas;
  }

  async updateArea(id: string, area: Area): Promise<void> {
    const areaRef = doc(this.firestore, 'areas', id);
    const updatedArea = { ...area };
    delete updatedArea.id;
    await updateDoc(areaRef, updatedArea);
  }

  async deleteArea(id: string): Promise<void> {
    const areaRef = doc(this.firestore, 'areas', id);
    await deleteDoc(areaRef);
  }
}
