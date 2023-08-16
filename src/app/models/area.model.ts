import { User } from "./user.model";

export interface Area {
  codigo: number;
  nombre: string;
  lider: string;
  estado: string;
  users?: User[];
}
