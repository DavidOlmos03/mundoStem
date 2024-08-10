import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

@Injectable({
  providedIn: 'root',
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hasError!: boolean;

  // Variables de la dataurl
  routeName: string = '';
  imageSrc: string = '';

  defaultAuth: any = {
    email: '',
    password: '',
  };
  // email_address: string = "";
  // password: string = "";
  bioSection = new FormGroup({
    email_address: new FormControl<string>(''),
    password: new FormControl<string>('')
  })
  email_address = String(this.bioSection.get('email_address')?.value);
  password = String(this.bioSection.get('password')?.value);
  datosIngresados: any;
  errorMessage: string = '';
  successMessage: String = '';
  /**
   * Se utiliza una url para almacenar la dirección de la API
   */
  //url = 'http://localhost:8000/api/read_user_by_email';
  url = 'http://localhost:8000/token';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }
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
      // Redireccionar a la ruta deseada si el usuario está logueado
      this.router.navigate(['']);
    }
    this.initForm();

    // Cargando la data url
    this.route.data.subscribe(data => {
      this.routeName = data['name'];
      this.imageSrc = data['imageSrc'];
      console.log('Route Name:', this.routeName);  // Esto debería mostrar "Registro"
      console.log('Image Src:', this.imageSrc);    // Esto debería mostrar el src de la imagen
      console.log(data)
    });

    const fullPath = this.route.snapshot.url.map(segment => segment.path).join('/');
    console.log('Ruta actual:', fullPath);

  }
  // convenience getter for easy access to form fields
  // get f() {
  //   return this.loginForm.controls;
  // }

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
  //OBS. el control del ingreso de datos, deberia hacerse desde el backend, ie verificar que el usuario no exista
  //deberia controlarse desde el backend

  enviarDatos(): void {
    const body = new FormData();
    body.append('username', this.email_address);
    body.append('password', this.password);

    // Realizar la llamada al backend y manejar la respuesta
    this.http.post(this.url, body).subscribe(
      (response:any) => {
        console.log('Solicitud POST exitosa', response);
        const accessToken = response.access_token;
        this.successMessage = 'Se ha ingresado con exito'

        // Realizar acciones adicionales con la respuesta de la API
        localStorage.setItem('acceso', accessToken); //Al darse el acceso se cuarda la variable de sesion en localStorage

        // Redireccionar a la URL deseada
        window.location.href = 'http://localhost:4200/';
        // Por ejemplo, mostrar un mensaje de éxito
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error en la solicitud POST', error);
        // Manejar el error de la solicitud
      }
    );
  }
}
