import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {
  contactForm!: FormGroup;

  ngOnInit() {
    this.contactForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      course: new FormControl('DevOps'),
      status: new FormControl('H1B'),
      message: new FormControl('')
    });

    this.onStatusChange(); // Initial check
    this.contactForm.get('status')?.valueChanges.subscribe(value => this.onStatusChange(value));
  }

  onStatusChange(value?: string) {
    value = value || this.contactForm.get('status')?.value;
    if (value === 'F1') {
      this.contactForm.addControl('graduationDate', new FormControl('', Validators.required));
      this.contactForm.addControl('universityName', new FormControl('', Validators.required));
      this.contactForm.addControl('major', new FormControl('', Validators.required));
    } else {
      this.contactForm.removeControl('graduationDate');
      this.contactForm.removeControl('universityName');
      this.contactForm.removeControl('major');
    }
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
