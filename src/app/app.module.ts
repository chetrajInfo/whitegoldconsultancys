import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OurservicesComponent } from './ourservices/ourservices.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderpageComponent,
    FooterComponent,
    MainpageComponent,
    ContactusComponent,
    OurservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Add ReactiveFormsModule here
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
