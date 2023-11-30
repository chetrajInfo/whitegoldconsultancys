import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  @ViewChild('contactForm') contactForm: NgForm | undefined;
  
  fullname: string='';
  email: string='';
  phone: string='';
  message: string='';

  onSubmit() {
    // Handle form submission
    console.log(this.fullname, this.email, this.phone, this.message);
    this.contactForm?.resetForm();
    }
}
