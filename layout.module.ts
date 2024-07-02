import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent],
  imports: [CommonModule, LayoutRoutingModule, SidebarModule, ButtonModule],
})
export class LayoutModule {}
