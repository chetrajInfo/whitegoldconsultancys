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
      status: new FormControl('H1B'), // Add status form control
      graduationDate: new FormControl({value: '', disabled: true}), // Add graduation date, initially disabled
      universityName: new FormControl({value: '', disabled:true}),
      message: new FormControl('')
    });

    // Listen for changes in the status field to toggle the graduation date field
    this.contactForm.get('status')?.valueChanges.subscribe(value => {
      if (value === 'F1') {
        this.contactForm.get('graduationDate')?.enable();
        this.contactForm.get('universityName')?.enable();
      } else {
        this.contactForm.get('graduationDate')?.disable();
        this.contactForm.get('universityName')?.disable();
      }
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}