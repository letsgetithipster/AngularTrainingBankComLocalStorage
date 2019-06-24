import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro;
  valoresForm: Object;
  conversao;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: ['', Validators.required]
    });

    // setTimeout(() => {
    //   this.formCadastro.patchValue({
    //     nome: 'Guilherme de Oliveira Santos',
    //     cpf: '000.000.000-00',
    //     email: 'guilherme.santos97@outlook.com.br',
    //     telefone: '19995348573',
    //     endereco: 'Alameda Ezequiel Mantoanelli'
    //   });
    // }, 2000);

    console.log(this.valoresForm);
    
    this.formCadastro.valueChanges
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
  }
  cadastro() {
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('cadastro', this.conversao);
  }
}
