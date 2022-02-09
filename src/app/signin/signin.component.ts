import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FormControl,  FormGroup,  Validators,  AbstractControl,} from '@angular/forms';
import { logindata, regdata } from '../JSONdata/signin';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  errormessage: any;
  user: any;

  constructor(private as: AuthService, private router: Router) {}
  login: boolean = true;
  error: string = '';
  signindata: any;
  signupdata: any;
  

  move() {
    this.login = !this.login;
    
  }

  submit(){
    if (this.login) {
      if (!this.formlogin.invalid) {
        console.log(this.formlogin.value);
        this.as
          .login(this.formlogin.value)
          .then((res) => {
            this.router.navigate(['/home']);
          })
          .catch((err) => {
            console.log(err);
          });
      } 
      else {
        console.log('invalid login');
        this.error = 'Please fill all fields correctly.';
      }
    } else {
      if (!this.formreg.invalid) {
        let data = this.formreg.value;
        console.log(data);
         
          this.as.signup(data)
          .then((res) => {
            this.login = true;
          })
          .catch((err) => {
            this.error = err.message;
          });
      }
      else{
        console.log('invalid signup');
        this.error = 'Please fill all fields correctly.';
      }
    }    
  }

  formlogin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
      ),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  formreg = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        ),
      ]),
      
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        ),
      ]),
     
      confirmpassword: new FormControl('', [Validators.required]),
    },
    { validators: this.checkPasswords }
  );

  
  ngOnInit(): void {
  
    this.signindata = logindata;
    this.signupdata = regdata;  
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
    });  
  }
  

  

  

  formlog(name: string) {
    return this.formlogin.get(name)!;
  }
  formregget(name: string) {
    return this.formreg.get(name)!;
  }

  checkPasswords(group: AbstractControl) {
    
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmpassword')?.value;

   
    return pass === confirmPass ? null : { notSame: true };
  }

}
