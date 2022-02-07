import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  FormControl,  FormGroup,  Validators,  AbstractControl,} from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  errormessage: any;


  constructor(private router: Router) {}
  login: boolean = true;
  error: string = '';
  signindata: any;
  signupdata: any;

  move() {
    this.login = !this.login;
    // this.error = false;
  }

  submit(){}

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
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[2-9]{2}\\d{8}'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
        ),
      ]),
      // role: new FormControl('user'),
      confirmpassword: new FormControl('', [Validators.required]),
    },
    { validators: this.checkPasswords }
  );

  ngOnInit(): void {
    console.log(this.formreg.value);
    console.log(this.formlogin.value);
    this.signindata = logindata;
    this.signupdata = regdata;
    // this.formreg.setValidators(this.checkPasswords);
    // this.as.getUserState().subscribe(res => {
    //   if (res) {
    //     this.as.logout();
    //   }
    //   // this.user = res;
    //   // this.as.getprofile(this.user.uid).subscribe((res: any) => {
    //   //   this.role = res.payload.data().role;
    //   // })
    // })
    
  }
  

  formlog(name: string) {
    return this.formlogin.get(name)!;
  }
  formregget(name: string) {
    return this.formreg.get(name)!;
  }

  checkPasswords(group: AbstractControl) {
    // here we have the 'passwords' group
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmpassword')?.value;

    console.log(pass, confirmPass, pass == confirmPass);
    return pass === confirmPass ? null : { notSame: true };
  }
  

}
