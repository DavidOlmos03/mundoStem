import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class IndexLoginComponent implements OnInit{
  email_address: string = "";
  password: string = "";
  datosIngresados: any;
  errorMessage: string = '';
  successMessage: String = '';
  /**
   * Se utiliza una url para almacenar la dirección de la API
   */
  url = 'http://localhost:8000/api/read_user_by_email';

  constructor(private http: HttpClient, private router: Router) { }
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
    if (this.logueadoFunction() !== null && this.logueadoFunction()) {
      // Redireccionar a la ruta deseada si el usuario está logueado
      this.router.navigate(['']);
    }

  }

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
        localStorage.setItem('acceso', 'true'); //Al darse el acceso se cuarda la variable de sesion en localStorage

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

  reiniciarDatos(): void {
    this.email_address = "";
    this.password ="";
    this.errorMessage = '';
    this.successMessage = '';
  }

}
