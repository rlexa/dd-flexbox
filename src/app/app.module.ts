import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexboxModule } from './modules/flexbox/flexbox.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlexboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
