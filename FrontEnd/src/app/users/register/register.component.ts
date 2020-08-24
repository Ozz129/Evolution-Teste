import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model'
import { UsersService } from '../../services/users.service'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Router} from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nuevoUsuario = new User(0,'','','')
  constructor( private _userServie: UsersService, private router: Router ) { }

  ngOnInit(): void {
  }

  
  register() {
    this._userServie.register(this.nuevoUsuario).subscribe(data => {
      if(data.status){
        localStorage.setItem('user', data.insertId)
       this.opensweetalertcst(data.msg, '¿Ingresar ahora mismo?')
      }
    });
  }

  opensweetalertcst(msg: string, tool: string){
    Swal.fire({
      title: msg,
      text: tool,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, vamos',
      cancelButtonText: 'No, en un rato'
    }).then((result) => {
      if (result.value) {
        this.router.navigateByUrl('dashboard')
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Está bien',
        'Te estaremos esperando :)',
        'info'
      )
      }
    })
  }
}

