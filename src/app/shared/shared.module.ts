import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';
import { StepperModule } from 'primeng/stepper';
import { DividerModule } from 'primeng/divider';
import { NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { KnobModule } from 'primeng/knob';
import { ProgressBarModule } from 'primeng/progressbar';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

const PRIME_NG_MODULES = [
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  MenubarModule,
  DrawerModule,
  MenuModule,
  StepperModule,
  DividerModule,
  BreadcrumbModule,
  KnobModule,
  ProgressBarModule,
  PanelModule,
  TableModule,
  TagModule,
];


@NgModule({
  imports: [...PRIME_NG_MODULES],
  exports: [...PRIME_NG_MODULES],
})
export class SharedModule { }
