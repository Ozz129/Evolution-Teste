import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model'
import { TasksService } from '../../services/tasks.service'
import * as moment from 'moment';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Router} from '@angular/router'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newTask = new Task(0,'','',null,'',0)
  validity: string;

  lista:Object[]=[
    {name: 'Alta', value: 'ALTA'},
    {name: 'Media', value: 'MEDIA'},
    {name: 'Baja', value: 'BAJA'}
  ];
  constructor(private _taskService: TasksService,private router: Router) { }

  ngOnInit(): void {
  }

  createTask(){
    const today = moment()
    const expirationDate = today.add(this.validity, 'days')
    this.newTask.expiration = expirationDate.format('YYYY-MM-DD')
    this.newTask.user = parseInt(localStorage.getItem('user'))

    this._taskService.createTasks(this.newTask).subscribe((data) => {
      if(data.status){
        this.opensweetalertcst(data.msg, '¿Desea revisar su lista de tareas?')
      }
    })
  }

  opensweetalertcst(msg: string, tool: string){
    Swal.fire({
      title: msg,
      text: tool,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, vamos',
      cancelButtonText: 'No, ingresar una nueva'
    }).then((result) => {
      if (result.value) {
        // redireccion a dashboard
        this.router.navigateByUrl('dashboard')
      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })
  }
}
