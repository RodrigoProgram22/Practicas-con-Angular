import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  //Inyectar el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      user: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(12),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      terms: ['', [Validators.requiredTrue]],
    });
  }
  ngOnInit(): void {}

  send(): any {
    console.log(this.form.value);
  }
}
