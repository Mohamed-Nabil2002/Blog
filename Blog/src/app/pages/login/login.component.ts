import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  ngOnInit(): void {}

  constructor(private _http: HttpClient, private fb: FormBuilder, private router:Router) {}

  registerForm: any = this.fb.group({
    password: ['', [
      Validators.required,

    ]],
    username: ['', [

    ]]
  });


  onsubmit() {
    this._http
      .post('http://localhost:3000/api/auth/login', this.registerForm.value)
      .subscribe((res: any) => {
        localStorage.setItem('token', res)
        this.router.navigateByUrl("/home")
        console.log(res);
      });
  }
}
