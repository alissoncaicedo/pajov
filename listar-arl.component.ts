import { Component, EventEmitter, Input, Output, input, signal } from '@angular/core';
import { Arl } from '../../../../core/models/arl.model';
import { ArlService } from '../../services/arl.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-listar-arl',
  templateUrl: './listar-arl.component.html',
  styleUrl: './listar-arl.component.scss',
  providers: [ConfirmationService]
})
export class ListarArlComponent {
@Output() editarArl = new EventEmitter<number>()
@Output() eliminar = new EventEmitter<number>();
@Input({required: true}) listarArl: Arl[] = [];
arlCopia: Arl [] = [];
idArlEntrante: number = 0;
listaArlSignal = signal<Arl[]>([]);

  constructor(
    private _arlsrv: ArlService,
    private _msgSvc: MessageService,
    private _confirmationSvc: ConfirmationService,
    private form: FormBuilder
   ) {
   
    
  }
  confirm(event: Event, idArl: number) {
    this._confirmationSvc.confirm({
        target: event.target as EventTarget,
        message: '¿Está seguro que desea eliminar el arl?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        acceptIcon:"none",
        rejectIcon:"none",
        rejectButtonStyleClass:"p-button-text",
        accept: () => {
            this._msgSvc.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 1000 });
            this.delet(idArl);
        },
        reject: () => {
            this._msgSvc.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 1000 });
        }
    });
}
  ngOnInit(){
    this._arlsrv.listarArl().subscribe({
      next:(data:Arl[])=> {
        this.listarArl = data;
        this.arlCopia = [...this.listarArl];
        console.table(data);
        this.listaArlSignal.set(data)
      } 
    })

  }

  delet(idArl: number) {
    console.log('Enviando id para eliminar arl ' + '' + idArl)
    this.eliminar.emit(idArl);
    this.listaArlSignal.update(arls => {
      return arls.filter(arl => {
        return arl.idArl != idArl
      })
    })
  }

  editar(idArl: number) {
    console.log('Enviando id para editar arl ' + '' + idArl)
    this.editarArl.emit(idArl);
  }


  

  showToastMsg(severity: string, summary: string, detail: string) {
    this._msgSvc.add({ severity: severity, summary: summary, detail: detail });
  }
  }


