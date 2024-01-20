import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  id: number  = 0;
  full_name: string = "";
  email_address: string = "";
  password: string = "";
  datosIngresados: any;
  errorMessage: string = '';
  successMessage: String = '';
  url = 'http://localhost:8000/api/Create_user'; // Dirección de la API

  constructor(private http: HttpClient) { }
  //OBS. el control del ingreso de datos, deberia hacerse desde el backend, ie verificar que el usuario no exista
  //deberia controlarse desde el backend
  guardarDatos(): void {
    this.datosIngresados = {
      id: this.id,
      full_name: this.full_name,
      email_address: this.email_address,
      password: this.password
    };
    const body = { id: this.id, full_name: this.full_name, email_address: this.email_address, password: this.password}; // Reemplaza esto con el cuerpo de tu solicitud POST
    // Realizar la llamada al backend y manejar la respuesta
    this.http.post(this.url, body).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
        this.successMessage = 'Usuario registrado con exito'
        // Realizar acciones adicionales con la respuesta de la API

        // Por ejemplo, mostrar un mensaje de éxito
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error en la solicitud POST', error);
        // Manejar el error de la solicitud

        // Verificar si el error es debido a que el ID ya existe
        if (error.status === 400 && error.error && error.error.detail === `Product ${this.id} already exists`) {
          this.errorMessage = 'El ID del usuario ya existe, no se puede registrar en el sistema';
        } //else {
          //this.errorMessage = 'Error en la solicitud POST';
        //}
      }
    );
  }

  reiniciarDatos(): void {
    this.id =  0;
    this.full_name=  "";
    this.email_address = "";
    this.password ="";
    this.errorMessage = '';
    this.successMessage = '';
  }
}
