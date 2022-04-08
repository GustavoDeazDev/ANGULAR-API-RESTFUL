import { Injectable } from '@angular/core';
// importando os recursos necessários
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../shared/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()

export class RestApiService {
  // definindo o caminho para nossa API
  apiURL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

   httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json'
    })
  }
/*
===============================================================
      CONSTRUINDO A API E SEUS RESPECTIVOS MÉTODOS
===============================================================
 */

// aqui, estamos recuperando todos os dados da base para criarmos uma lista
getEmployees(): Observable<Employee>{
  return this.http.get<Employee>(this.apiURL + '/employees')
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// recuperando um unico registro da base de dados
getEmployee(id: any): Observable<Employee>{
  return this.http.get<Employee>(this.apiURL + '/employees/' + id)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
//criar o método para inserir dados na base
createEmployee(employee: any): Observable<Employee>{
  return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// criar o metodo para atualizar registros da base de dados
updateEmployee(id: any, employee: any): Observable<Employee>{
  return this.http.put<Employee>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

// criar o metodo de exclusão de registros
deleteEmployee(id: any){
  return this.http.delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}
// criar a função de manipulação de erros - é uma função js
handleError(erro: any){
  let mensagemErro = ''
  if(erro.error instanceof ErrorEvent){
    // tratando o erro - se ocorreu no client app (aplicação front)
    mensagemErro = erro.error.message
  }else{
    // tratando o erro - se ocorreu no server-side (aplicação back-end)
    mensagemErro = `Codigo erro: ${erro.status}\nMensagem do erro:${erro.message}`
  }
  window.alert(mensagemErro)
  return throwError(mensagemErro)
}

}
