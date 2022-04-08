import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  // primeira parte - criar uma "copia - tirar uma foto" da rota pela qual os dados circularão
  id = this.actRoute.snapshot.params['id']
  dadosRegistro:any = { }
 // segunda parte - criar as referencias de instancia
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }
 // terceira parte - priorizando o carregamento do registro de dados
  ngOnInit(): void {
    this.restApi.getEmployee(this.id).subscribe((data:{}) => {
      this.dadosRegistro = data
    })
  }
  //quarta parte - criar a função para acessar a Rest API para usar o metodo de atualização de registros
  atualizarRegistro(){
    if(window.confirm('Tem certeza que deseja atualizar este registro?')){
      this.restApi.updateEmployee(this.id, this.dadosRegistro).subscribe(data => this.router.navigate(['/employees-list']))
    }
  }

}
