import { Component, OnInit } from '@angular/core';
import { ApiService, SharedService } from '@test/shared';
import { User } from '@test/shared/lib/models/user.model';

@Component({
  selector: 'lib-sub-module1',
  template: `
    <p>      
        SubModule1
    </p>
    <p *ngIf="!!property">Value of property is {{property}}</p>
    <p>Users list: </p>
    <ul *ngIf="!!users">
        <li *ngFor="let user of users">
            <div>Id: {{user.id}}</div>
            <div>Name: {{user.name}}</div>
            <div>Email: {{user.email}}</div>
            <div>Gender: {{user.gender}}</div>
            <div>Status: {{user.status}}</div>
        </li>
    </ul>
  `,
  styles: [
  ]
})
export class SubModule1Component implements OnInit {

  public property!: String;
  public users!: Array<User>;

  constructor(private sharedService: SharedService,
              private apiService: ApiService) { }

  ngOnInit(): void {
    this.sharedService.setProperty('XXXX_' + Math.random())
    this.property = this.sharedService.getProperty();
    this.apiService.users()
        .subscribe(users => {
            this.users = users;
        })
  }

}
