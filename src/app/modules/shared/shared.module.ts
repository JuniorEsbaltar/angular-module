import { TransformPipe } from './pipes/transform.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SharedComponent,
    TransformPipe
  ],
  exports: [
    SharedComponent,
    FormsModule
  ],
})
export class SharedModule { }
