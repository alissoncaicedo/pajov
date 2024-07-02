import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Remision } from '../../../../core/models/remision.model';
import { RemisionService } from '../../services/remision.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tabla-remision',
  templateUrl: './tabla-remision.component.html',
  styleUrl: './tabla-remision.component.scss',
  providers: [ConfirmationService]
})
export class TablaRemisionComponent {
// @Input({required: true}) listarRemision: Remision[] = [];
@Output() onVisualizar = new EventEmitter<{idRemision: number}>();

remisionCopia: Remision [] = [];
listaRemiSignal = signal<Remision[]>([]);


constructor(
  private _Remisionsvc: RemisionService,
  private _msgSvc: MessageService,
  
){}

ngOnInit(){
  this._Remisionsvc.listarRemision().subscribe({
    next:(data:Remision[])=> {
      this.remisionCopia = data;
      this.listaRemiSignal.set(data)
      console.log(this.listaRemiSignal());
    }
  })
}

visualizar(idRemision: number){
  this.onVisualizar.emit({idRemision: idRemision});
} 

showToastMsg(severity: string, summary: string, detail: string) {
  this._msgSvc.add({ severity: severity, summary: summary, detail: detail });
}
}
