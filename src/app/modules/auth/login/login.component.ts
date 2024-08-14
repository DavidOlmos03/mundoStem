import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

@Injectable({
  providedIn: 'root',
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hasError!: boolean;
  datosIngresados: any;
  errorMessage: string = '';
  successMessage: String = '';

  defaultAuth: any = {
    email: '',
    password: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private autService: AuthService
  ) { }
  // logueadoFunction() {
  //   return localStorage.getItem('acceso');
  // }
  ngOnInit() {
    this.initForm();
  }

  // Constrol en el formulario de login
  initForm() {
    this.loginForm = this.fb.group({
      email: [
        this.defaultAuth.email,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(3),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        this.defaultAuth.password,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ]),
      ],
    });
  }

  enviarDatos(): void {
    const formData = new FormData()

    formData.append('username', this.loginForm.get('email')?.value)
    formData.append('password', this.loginForm.get('password')?.value)

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    this.autService.login(formData)
      .subscribe(res => {
        localStorage.setItem('auth-token',res.access_token)
        this.router.navigate([''])
      },error=>{
        this.hasError = true
        setTimeout(()=>{
          this.hasError = false
        },5000)
        console.log(error)
      })
    }
  }
