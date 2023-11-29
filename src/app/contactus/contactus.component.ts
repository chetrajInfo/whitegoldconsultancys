import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  email: string='';
  phone: string='';
  message: string='';

  onSubmit() {
    // Handle form submission
    console.log(this.email, this.phone, this.message);
    this.email='';
    this.phone='';
    this.message='';
  }
}
