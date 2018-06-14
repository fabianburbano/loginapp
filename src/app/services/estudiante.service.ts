import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  listaEstudiante:AngularFireList<any>;
  selectedEstudiante:Estudiante = new Estudiante();
  constructor(public afdb:AngularFireDatabase) { }

  getEstudiantes(){
    return this.listaEstudiante = this.afdb.list('estudiante');
  }

  insertarEstudiante(estudiante:Estudiante){
    this.listaEstudiante.push({
      id: estudiante.id,
      nombres:estudiante.nombres,
      apellidos:estudiante.apellidos,
      horario:estudiante.horario,
      direccion:estudiante.direccion,
      acudiente:estudiante.acudiente,
      telefono:estudiante.telefono,
      total_horas:0,
      paquete:estudiante.paquete
    });
  }

  updateEstudiante(estudiante:Estudiante){
    this.listaEstudiante.update(estudiante.key, {
      nombres:estudiante.nombres,
      apellidos:estudiante.apellidos,
      horario:estudiante.horario,
      direccion:estudiante.direccion,
      acudiente:estudiante.acudiente,
      telefono:estudiante.telefono,
      //total_horas:estudiante.total_horas,
      paquete:estudiante.paquete
    });
  }

  deleteEstudiante(key:string){
    this.listaEstudiante.remove(key);
  }
}
