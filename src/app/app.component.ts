import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template-driven-forms';

  firstName = '';
  lastName = '';
  dob = '';
  emailAddress = '';


  defaultCountry = "America"

  @ViewChild('registrationForm') form: NgForm;

  genders = [
    {id:'check-male', value:'male', display:"Male"},
    {id:'check-female', value:'female', display:"Female"},
    {id:'check-other', value:'other', display:"Prefer not to say"}
  ]

  onFormSubmitted(){
    console.log(this.form);
    console.log('gender is ' + this.form.value.gender)
    console.log('first name is ' + this.form.value.firstName)
    console.log('last name is '+ this.form.controls['lastName'].value)
    console.log('Street name ', this.form.value.address.controls.street1)
    console.log('City name ', this.form.value.address.controls.city)
    
  }

  generateUsername() {
    let username = '';
    if(this.firstName.length >= 3) {
      username += this.firstName.slice(0,3)
    } else {
      username += this.firstName;
    }
    if(this.lastName.length >= 3) {
      username += this.lastName.slice(0,3)
    } else {
      username += this.lastName;
    }

    let dateTime = new Date(this.dob)
    username += dateTime.getFullYear();

    username = username.toLowerCase();

    // console.log("user name = ", username)
    // this.form.value.username = username;
    //  this.form.controls['username'].value = username;

    // this.form.setValue({
    //   address: {
    //     city: this.form.value.address.city,
    //     country: this.form.value.address.country,
    //     post: this.form.value.address.post,
    //     region: this.form.value.address.region,
    //     street1: this.form.value.address.street1,
    //     street2: this.form.value.address.street2,
    //   },
    //   dob: this.form.value.dob,
    //   email: this.form.value.email,
    //   firstName: this.form.value.firstName,
    //   gender: this.form.value.gender,
    //   lastName: this.form.value.lastName,
    //   phone: this.form.value.phone,
    //   username: username
    //  })

    this.form.form.patchValue({
      username:username,

      //incase you want to assign country with value 'America'

      address: {
        country:'America'
      }
    })
     
  }
}


