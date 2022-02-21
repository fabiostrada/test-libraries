import { Component, OnInit } from '@angular/core';
import { SharedService } from '@test/shared';

@Component({
  selector: 'lib-sub-module2',
  template: `
    <p>      
        SubModule2
    </p>
    <p *ngIf="!!property">Value of property is {{property}}</p>
  `,
  styles: [
  ]
})
export class SubModule2Component implements OnInit {

  public property!: String;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.property = this.sharedService.getProperty();
  }

}
