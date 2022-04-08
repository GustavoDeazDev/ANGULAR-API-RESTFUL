import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  // primeira parte - criando a propriedade que receberá os dados
  @Input() employeeDetails = {
    name: '',
    email: '',
    phone: ''
  }
 // segunda parte - definindo as referencias de instancia no construtor
  constructor(
    public restApi: RestApiService,
    public router: Router
  ){ }

  ngOnInit(): void {}
 // terceira parte - cria uma função para acessar o metodo da Rest API para criar um registro
 addEmployee(){
   this.restApi.createEmployee(this.employeeDetails).subscribe((data:{}) => {
      this.router.navigate(['/employees-list'])
   })
 }
}
