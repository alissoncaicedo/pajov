import { Component, signal } from '@angular/core';
import { Arl } from '../../core/models/arl.model';
import { ArlService } from './services/arl.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-arl',
  templateUrl: './arl.component.html',
  styleUrl: './arl.component.scss'
})
export class ArlComponent {
  displayModalForm: boolean = false;
  formulario: FormGroup;
  tituloPrincipal: string = "ADMINISTRACIÓN Y GESTION ARL"
  tituloModal: string = "CREAR ARL";
  listarArl: Arl[] = [];
  ArlCopia: Arl[] = [];
  idArlEntrante: number = 0;



  constructor(
    private _arlSvc: ArlService,
    private _msgSvc: MessageService,
    private _confirmationSvc: ConfirmationService,
    private form: FormBuilder
  ) {
    this.formulario = this.form.group({
      idArl: [],
      nombreArl: ['', Validators.required],
      estado: ['', Validators.required],
    })


  }


  openModal() {
    this.displayModalForm = true;
  }

  closedModal() {
    this.displayModalForm = false;
    this.formulario.reset();
    this.tituloModal = "CREAR ARL";
  }

  crearArl(formulario: Arl) {
    if (this.formulario.valid) {
      if (formulario.idArl != null) {
        this._arlSvc.actualizarArl(formulario).subscribe({
          next: (data: Arl) => {
            this.showToastMsg('info', 'Información', 'El registro fue actualizado correctamente');
            this.closedModal() 
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          },
          error: (error) => {
            if (error) {
              this.showToastMsg('info', 'Información', 'Ocurrió un error al actualizar el registro' + ' ' + error.error.Mensaje);
            }
            this.showToastMsg('warn', 'Warn', 'Ocurrió un error al actualizar el Arl')
          }
        });
      } else {
        const command: Arl =  {
          nombreArl: this.formulario.get("nombreArl")?.value,
          estado: this.formulario.get("estado")?.value
        }
        this._arlSvc.crearArl(command).subscribe({
          next: (data) => {
            this.showToastMsg('info', 'Información', 'El registro fue creado correctamente');
            this.closedModal() 
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          },
          error: (error) => {
            if (error) {
              this.showToastMsg('info', 'Información', 'Ocurrió un error al crear el registro' + ' ' + error.error.Mensaje);
            }
          }
        });
      }
    }else{
      this.showToastMsg('info', 'Información', 'Por favor, complete el formulario correctamente');
      this.formulario.markAllAsTouched();
    }
  }


  obtenerPorId(idArl: number) {
    this.idArlEntrante = idArl;
    if (this.idArlEntrante !== 0) {
      this._arlSvc.getArlById(this.idArlEntrante).subscribe({
        next: (data: Arl) => {
          this.formulario.patchValue(data);
          this.tituloModal = "EDITAR ARL"
          this.openModal();
        }
      })
    }
  }

  eliminarArl(idArl: number) {
    this._arlSvc.deletArl(idArl).subscribe({
      next: data => {
        this.showToastMsg('info', 'Información', 'Registro eliminado correctamente');
      },
      
      error: error => {
        this.showToastMsg('error', 'Error', 'Error al eliminar registro' + ' ' + error.error.Mensaje);
      }
      })
  }

  showToastMsg(severity: string, summary: string, detail: string) {
    this._msgSvc.add({ severity: severity, summary: summary, detail: detail });
  }
}




