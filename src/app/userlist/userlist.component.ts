import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit{
constructor(private services:UsersService, private router :Router) {

}
data:any
searchvalue :string = ""
ngOnInit(): void {
  this.services.userlist().subscribe({
    next: (data) => {
      this.data = data.data;
    }
  })
}
click(id:any) {

this.router.navigate(['/details']
  ,{queryParams:{id:id}}

)
}
}
