import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  title = 'Listar Usuários'
  listUsers: User[] = [];

  constructor(private service: UserService) { };

  ngOnInit(): void {
    this.service.listar().subscribe((listUsers) => {
      this.listUsers = listUsers;
    });
  }
}
