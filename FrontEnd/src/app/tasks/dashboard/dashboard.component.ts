import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model'
import { TasksService } from '../../services/tasks.service'
import { MatSnackBar } from "@angular/material/snack-bar";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import * as moment from 'moment';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   
  displayedColumns: string[] = ['Id','Nombre', 'Prioridad', 'Vencimiento', 'Descripcion', 'Acciones']
  dataSource: Object[]
  dataSoruceExpiredTask: Object
  expiredTasks: number;
  modalOptions:NgbModalOptions;
  closeResult: string;
  constructor(private _taskServie:TasksService, private snackBar: MatSnackBar, private modalService: NgbModal ) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
   }

  ngOnInit(): void {
    this.expiredTasks = 0
    this.loadTasks();
    this.getExpiratedTask();
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

getExpiratedTask(){
  let today = moment().format('YYYY-MM-DD');
  console.log('fecha',today)
  this._taskServie.getEspiratedTasks(today).subscribe((data) => {
    this.expiredTasks = data.count
    this.dataSoruceExpiredTask = data.expirated_task
  })
}

open(content) {
  this.modalService.open(content, this.modalOptions).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
}
