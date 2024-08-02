import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})

export class InfoComponent implements OnInit{
constructor(private services:UsersService,private extractid : ActivatedRoute)
{

}
id:any
details:any
ngOnInit(): void {
    this.extractid.queryParams.subscribe(params=>{this.id = params["id"]})
    this.services.userdetails(this.id).subscribe({
      next: (data) => {
        this.details = data.data;
      },
    })
}
}
