import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../../services/estudiante.service';
import { Estudiante } from '../../../models/estudiante';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.scss']
})
export class ListaEstudianteComponent implements OnInit {
  listaEstudiante:Estudiante[];

  constructor(public es:EstudianteService,
              public toastr:ToastrService) { }

  ngOnInit() {
    this.es.getEstudiantes()
    .snapshotChanges().subscribe(est=>{
      this.listaEstudiante = [];
      est.forEach(el=>{
        let x = el.payload.toJSON();
        x["key"] = el.key;
        this.listaEstudiante.push(x as Estudiante);
      });
    });
  }

  onEdit(estudiante:Estudiante){
    this.es.selectedEstudiante = Object.assign({}, estudiante);
  }

  onDelete(key:string){
    if(confirm('Está seguro de eliminar el registro?')){
      this.es.deleteEstudiante(key);
      this.toastr.success('Se elimino el registro', 'Eliminacion registro');
    }
  }

}
