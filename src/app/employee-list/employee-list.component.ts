import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // primeria parte - criar a propriedade para ser a coleção iteravel de dados
  listaFuncionarios: any = []
 // segunda parte - criar a referencia da instacia do service
  constructor(
    public restApi: RestApiService
    ) { }
  // terceira parte - priorizando o carregamento da lista de funcionarios
  ngOnInit(): void {
    this.loadEmployees()
  }
  // quarta parte - criar a função para acessar a Rest API e carregar todos os dados no componente
  loadEmployees(){
    return this.restApi.getEmployees().subscribe((data:{}) => {
      this.listaFuncionarios = data
    })
  }

  // quinta parte - função para acessar a Rest API e excluir um registro
  excluirFuncionario(id: any){
    if(window.confirm('Tem certeza que deseja excluir o registo?')){
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
      })
    }
  }

}
