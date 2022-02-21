import { Component, OnInit } from '@angular/core';
import { SharedService } from '@test/shared';

@Component({
  selector: 'lib-sub-module1',
  template: `
    <p>      
        SubModule1
    </p>
    <p *ngIf="!!property">Value of property is {{property}}</p>
  `,
  styles: [
  ]
})
export class SubModule1Component implements OnInit {

  public property!: String;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.setProperty('XXXX_' + Math.random())
    this.property = this.sharedService.getProperty();
  }

}
