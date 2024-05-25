import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private fb: FormBuilder,
  ) {

  }
  // Control errores
  registrationForm!: FormGroup;
  hasError:boolean = false;

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  initForm() {
    this.registrationForm = this.fb.group(
      {
        full_name: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        email_address: [
          '',
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
          ]),
        ],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        cPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        agree: [false, Validators.compose([Validators.required])],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
    );
  }
  id: number  = 0;
  // full_name: string = "";
  bioSection = new FormGroup({
    full_name: new FormControl<string>(''),
    email_address: new FormControl<string>(''),
    password: new FormControl<string>('')
  });

  // email_address: string = "";
  // password: string = "";
  datosIngresados: any;
  errorMessage: string = '';
  successMessage: String = '';
  url = 'http://localhost:8000/api/Create_user'; // Dirección de la API


  /**
   * Se verifica que el usuario no este logueado para que pueda acceder al login
   */
  logueadoFunction() {
    return localStorage.getItem('acceso');
  }
  /**
   * Desde que se inicia la página se verifica si el usuario esta logueado o no
   */
  ngOnInit() {
    if (this.logueadoFunction() !== null) {
      this.router.navigate(['']);
    }

    this.initForm();
  }
  //OBS. el control del ingreso de datos, deberia hacerse desde el backend, ie verificar que el usuario no exista
  //deberia controlarse desde el backend
  guardarDatos(): void {
    this.hasError = false
    this.datosIngresados = {
      id: this.id,
      full_name: this.bioSection.get('full_name')?.value,
      email_address: this.bioSection.get('email_address')?.value,
      password: this.bioSection.get('password')?.value
    };
    const body = { id: this.id, full_name: this.bioSection.get('full_name')?.value, email_address: this.bioSection.get('email_address')?.value, password: this.bioSection.get('password')?.value}; // Reemplaza esto con el cuerpo de tu solicitud POST
    // Realizar la llamada al backend y manejar la respuesta
    this.http.post(this.url, body).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
        this.successMessage = 'Usuario registrado con exito'
        // Realizar acciones adicionales con la respuesta de la API

        localStorage.setItem('acceso', 'true'); //Al darse el acceso se cuarda la variable de sesion en localStorage

        // Redireccionar a la URL deseada
        window.location.href = 'http://localhost:4200/';
        // Por ejemplo, mostrar un mensaje de éxito
        this.errorMessage = '';
      },
      (error) => {
        // Control del tiempo del mensaje de error
        this.hasError = true
        setTimeout(()=>{
          this.hasError = false
        },3000)
        // console.error('Error en la solicitud POST', error);
        // Manejar el error de la solicitud

        // Verificar si el error es debido a que el ID ya existe
        if (error.status === 400 && error.error && error.error.detail === `Product ${this.id} already exists`) {
          this.errorMessage = 'El ID del usuario ya existe, no se puede registrar en el sistema';
        }
      }
    );
  }
}
