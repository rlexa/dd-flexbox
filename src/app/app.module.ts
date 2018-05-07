import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FlexboxModule } from './modules/flexbox/flexbox.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlexboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
