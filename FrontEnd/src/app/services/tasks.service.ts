import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class TasksService {
    constructor(private http: HttpClient) {}
  
    deleteTask(id: number){
      return this.http.delete("http://localhost:8080/api/task/delete/" + id)
    }
    createTasks(task: any): Observable<any> {
      return this.http.post("http://localhost:8080/api/task/create_task", task);
    }
    getTasks() {
      return this.http.get("http://localhost:8080/api/task/get_all/" + localStorage.getItem('user'));
    }

    getEspiratedTasks(date: any): Observable<any>{
      return this.http.get("http://localhost:8080/api/task/get_prox_task/" + date + "/" + localStorage.getItem('user'));
    }

    getTask(id: number){
      return this.http.get("http://localhost:8080/api/task/get/" + id);
    }

    updateTask(task: any){
      return this.http.put("http://localhost:8080/api/task/update_task", task)
    }

    
  }