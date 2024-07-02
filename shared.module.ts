import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { TooltipModule } from 'primeng/tooltip';
import { ListboxModule } from 'primeng/listbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonGeneralComponent } from './components/button-general/button-general.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [ButtonGeneralComponent],
  providers: [
    DatePipe,
    MessageService,
    ConfirmationService,
    provideHttpClient(withFetch()),
  ],

  imports: [
    CommonModule,
    DropdownModule,
    TableModule,
    StepsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    ConfirmDialogModule,
    DialogModule,
    CheckboxModule,
    ToggleButtonModule,
    ScrollPanelModule,
    InputNumberModule,
    KeyFilterModule,
    TooltipModule,
    ListboxModule,
    CardModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    OverlayPanelModule,
    FloatLabelModule,
    MenuModule,
    InputSwitchModule,
    DividerModule
  ],

  exports: [
    DropdownModule,
    TableModule,
    StepsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    ConfirmDialogModule,
    DialogModule,
    CheckboxModule,
    ToggleButtonModule,
    ScrollPanelModule,
    InputNumberModule,
    KeyFilterModule,
    TooltipModule,
    ListboxModule,
    CardModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    OverlayPanelModule,
    FloatLabelModule,
    ButtonGeneralComponent,
    MenuModule,
    InputSwitchModule,
    DividerModule
  ],
})
export class SharedModule {}
