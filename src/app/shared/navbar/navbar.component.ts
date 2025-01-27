import { Component} from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  constructor(
    private autService: AuthService
  ){}

  logueadoFunction() {
    return this.autService.userLogin
  }
  
  cerrarSesion(): void {
    localStorage.removeItem('auth-token');
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
