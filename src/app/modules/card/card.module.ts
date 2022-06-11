import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardTitleComponent } from './components/card-title/card-title.component';



@NgModule({
  declarations: [
    CardComponent,
    CardTitleComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
