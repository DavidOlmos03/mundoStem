import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  hasError:boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {

  }

  ngOnInit() {
    this.initForm();
  }
  // Constrol en el formulario de registro
  initForm() {
    this.registrationForm = this.fb.group(
      {
        names: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        last_names: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        address: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        age: [
          0,
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        email: [
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


  guardarDatos(): void {
    const body = {
      email: this.registrationForm.get('email')?.value,
      names: this.registrationForm.get('names')?.value,
      address: this.registrationForm.get('address')?.value,
      last_names: this.registrationForm.get('last_names')?.value,
      age: this.registrationForm.get('age')?.value,
      password: this.registrationForm.get('password')?.value};

    this.userService.addUser(body)
      .subscribe(response=>{
        console.log("El Usuario se creo correctamente")
        // this.router.navigate(['']);
      }, error =>{

        this.hasError = true
        setTimeout(()=>{
          this.hasError = false
        },5000)

        console.log(error)
      })
  }
}
