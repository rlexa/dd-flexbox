import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexboxDirective } from './flexbox.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [FlexboxDirective],
  exports: [FlexboxDirective]
})
export class FlexboxModule { }
