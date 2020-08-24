import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model'
import { TasksService } from '../../services/tasks.service'
import { MatSnackBar } from "@angular/material/snack-bar";
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  displayedColumns: string[] = ['Id','Nombre', 'Prioridad', 'Vencimiento', 'Descripcion', 'Acciones']
  dataSource: Object[]
  constructor(private _taskServie:TasksService, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.loadTasks();
  }


loadTasks(){
this._taskServie.getTasks().subscribe((res: any) => {
  console.log(res.result)
  if(res.status){
    this.dataSource = res.result
  }
})
}

deleteTasks(id: number, descripcion: string){

  Swal.fire({
    title: '¿Desea eliminar esta tarea?',
    text: descripcion,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Si, eliminala',
    cancelButtonText: 'No, conservala'
  }).then((result) => {
    if (result.value) {
      this._taskServie.deleteTask(id).subscribe((data) => {
        let snackbar = this.snackBar.open('Tarea eliminada', 'ok', {
          duration: 2000
       });
       snackbar.afterDismissed().subscribe((action) => {
         if(action){
          location.reload();
         }
       })
      })
    } else if (result.dismiss === Swal.DismissReason.cancel) {

    }
  })




}

}
