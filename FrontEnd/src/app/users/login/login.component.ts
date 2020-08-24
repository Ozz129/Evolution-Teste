import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model'
import { UsersService } from '../../services/users.service'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {Router} from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nuevoUsuario = new User(0,'','','')

  constructor( private _userServie: UsersService, private router: Router ) { }

  ngOnInit(): void {
  }

  loguear() {
    this._userServie.login(this.nuevoUsuario).subscribe(data => {
      if(data.status){
        // redireccion a dashboard
        this.router.navigateByUrl('dashboard')
        localStorage.setItem('user', data.user)
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verifica tus datos e initentalo nuevamente'
        })
      }
    });
  
  }

  

}
