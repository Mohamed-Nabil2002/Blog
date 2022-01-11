import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private _http: HttpClient, private fb: FormBuilder, private router:Router) {}

  registerForm: any = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required]],
    username: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  onsubmit() {
    this._http
      .post('http://localhost:3000/api/auth/register', this.registerForm.value)
      .subscribe((res: any) => {
        this.router.navigateByUrl("/login")
        console.log(res);
      });
  }
}
