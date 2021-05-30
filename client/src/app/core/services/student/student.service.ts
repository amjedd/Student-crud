import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:5000/api/student/';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL+"GetStudents");
  }

  read(id): Observable<any> {
    return this.httpClient.get(`${baseURL+"GetStudent?id="}${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL+"AddStudent", data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.post(`${baseURL+"UpdateStudent?id="}${id}`, data);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL+"DeleteStudent?id="}${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(id): Observable<any> {
    return this.httpClient.get(`${baseURL+"GetStudent"}?id=${id}`);
  }

}
