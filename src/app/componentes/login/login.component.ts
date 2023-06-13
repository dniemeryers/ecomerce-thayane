import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const login = this.loginForm.value.login;
      const senha = this.loginForm.value.senha;

      // Verificar se o login e a senha correspondem aos valores esperados
      if (login === 'diego' && senha === 'niemeyer') {
        // Autenticação bem-sucedida
        console.log('Autenticação bem-sucedida');

        this.router.navigate(['/produto']);

      } else {
        // Autenticação falhou
        console.log('Autenticação falhou');
      }
    } else {
      // O formulário não é válido, faça o tratamento necessário
    }
  }
}