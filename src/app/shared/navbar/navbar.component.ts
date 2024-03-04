import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  logueadoFunction() {
    return localStorage.getItem('acceso');
  }
  cerrarSesion(): void {
    localStorage.removeItem('acceso');
    window.location.reload();
  }

  showAlertExit() {
    Swal.fire({
      title: "¿Seguro que quieres cerrar sesión?",
      showDenyButton: true,
      confirmButtonText: "Salir",
      denyButtonText: `No salir`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.cerrarSesion()
        Swal.fire("Sesión cerrada con éxito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Es un gusto tenerte en mundoSteam", "");
      }
    });
  }
}
