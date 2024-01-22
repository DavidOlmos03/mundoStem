import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class IndexLoginComponent {
  email_address: string = "";
  password: string = "";
  datosIngresados: any;
  errorMessage: string = '';
  successMessage: String = '';
  url = 'http://localhost:8000/api/read_user_by_email'; // Dirección de la API

  constructor(private http: HttpClient) { }
  //OBS. el control del ingreso de datos, deberia hacerse desde el backend, ie verificar que el usuario no exista
  //deberia controlarse desde el backend
  enviarDatos(): void {
    this.datosIngresados = {
      email_address: this.email_address,
      password: this.password
    };
    const body = {email_address: this.email_address, password: this.password}; // Reemplaza esto con el cuerpo de tu solicitud POST
    // Realizar la llamada al backend y manejar la respuesta
    this.http.post(this.url, body).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
        this.successMessage = 'Se ha ingresado con exito'
        // Realizar acciones adicionales con la respuesta de la API
        // Redireccionar a la URL deseada (en este caso, a https://www.npmjs.com/package/bcrypt)
        window.location.href = 'https://www.npmjs.com/package/bcrypt';
        // Por ejemplo, mostrar un mensaje de éxito
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error en la solicitud POST', error);
        // Manejar el error de la solicitud
      }
    );
  }

  reiniciarDatos(): void {
    this.email_address = "";
    this.password ="";
    this.errorMessage = '';
    this.successMessage = '';
  }

}
