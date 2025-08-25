import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';

import { NgModule } from '@angular/core';


const PRIME_NG_MODULES = [
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  MenubarModule,
  DrawerModule,
  MenuModule,
];


@NgModule({
  imports: [...PRIME_NG_MODULES],
  exports: [...PRIME_NG_MODULES],
})
export class SharedModule { }
