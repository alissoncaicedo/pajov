import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Remision } from '../../../../core/models/remision.model';

@Component({
  selector: 'app-dialog-remision-detalle',
  templateUrl: './dialog-remision-detalle.component.html',
  styleUrl: './dialog-remision-detalle.component.scss'
})
export class DialogRemisionDetalleComponent {

  @Output() closeModal = new EventEmitter<void>();
  @Input() displayModalView: boolean = false;
  @Input() remision: Remision | null = null;

  tituloModal: string = "REMISIÓN";

  constructor() { }

  ngOnInit(): void {

  }

  closedModal() {
    this.displayModalView = false;
    this.closeModal.emit();
  }

}
