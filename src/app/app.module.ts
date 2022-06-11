import { SharedModule } from './modules/shared/shared.module';
import { CardModule } from './modules/card/card.module';
import { ApplicationModule, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { CardTitleComponent } from './components/card-title/card-title.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CardTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    SharedModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
