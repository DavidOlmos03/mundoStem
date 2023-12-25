import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContainerComponent } from './login-container.component';

describe('LoginContainerComponent', () => {
  let component: LoginContainerComponent;
  let fixture: ComponentFixture<LoginContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginContainerComponent]
    });
    fixture = TestBed.createComponent(LoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 /*
  Para hacer la la ventana se arrastrable
 */
  /*document.addEventListener('DOMContentLoaded', function() {
    // Obtén referencias a elementos
    const openPopupBtn = document.getElementById('openPopupBtn');
    const loginPopup = document.getElementById('loginPopup');
    const closePopupBtn = document.getElementById('closePopupBtn');

    // Función para abrir la ventana emergente
    openPopupBtn.addEventListener('click', function() {
      loginPopup.style.display = 'block';
    });

    // Función para cerrar la ventana emergente
    closePopupBtn.addEventListener('click', function() {
      loginPopup.style.display = 'none';
    });

    // Hacer que la ventana emergente sea arrastrable
    let isDragging = false;
    let offsetX, offsetY;

    loginPopup.addEventListener('mousedown', function(e) {
      isDragging = true;
      offsetX = e.clientX - loginPopup.getBoundingClientRect().left;
      offsetY = e.clientY - loginPopup.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', function(e) {
      if (isDragging) {
        loginPopup.style.left = e.clientX - offsetX + 'px';
        loginPopup.style.top = e.clientY - offsetY + 'px';
      }
    });

    document.addEventListener('mouseup', function() {
      isDragging = false;
    });

    // Hacer que la ventana emergente se mueva con el scroll
    window.addEventListener('scroll', function() {
      loginPopup.style.top = window.scrollY + window.innerHeight / 2 + 'px';
    });
  });
*/
});
