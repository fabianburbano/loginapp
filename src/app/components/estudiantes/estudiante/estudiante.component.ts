import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstudianteService } from '../../../services/estudiante.service';
import { Estudiante } from '../../../models/estudiante';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {

  constructor(public estudianteService : EstudianteService,
              public toastr:ToastrService) { }

  ngOnInit() {
    this.estudianteService.getEstudiantes();
    this.resetForm();
  }

  onSubmit(estudianteForm:NgForm){
    if(estudianteForm.value.key == null){
      this.estudianteService.insertarEstudiante(estudianteForm.value);
      this.toastr.success('Se ha agregado un estudiante','Operación exitosa');
    }else{
      this.estudianteService.updateEstudiante(estudianteForm.value);
      this.toastr.success('Se ha editado un estudiante','Operación exitosa');
    }
    this.resetForm(estudianteForm);
  }

  resetForm(estudianteForm?:NgForm){
    console.log(estudianteForm);
    if(estudianteForm != null){
      estudianteForm.reset();
      this.estudianteService.selectedEstudiante = new Estudiante();
    }
  }

}
