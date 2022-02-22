import { Component, OnInit } from '@angular/core';
import { SharedService, EventService, LanguageConfig } from '@test/shared';

@Component({
  selector: 'lib-sub-module2',
  template: `
    <p>      
        SubModule2
    </p>
    <p *ngIf="!!property">Value of property is {{property}}</p>
    <p>Change language</p>
    <select name="language-select" [(ngModel)]="language" (change)="changeLanguage()">
      <option [value]="languageConfig.IT">Italiano</option>
      <option [value]="languageConfig.EN">Inglese</option>      
    </select>
  `,
  styles: [
  ]
})
export class SubModule2Component implements OnInit {

  public property!: string;
  public language: string = LanguageConfig.IT;
  public languageConfig = LanguageConfig;

  constructor(private sharedService: SharedService,
              private eventService: EventService) { }

  ngOnInit(): void {
    this.property = this.sharedService.getProperty();    
  }

  public changeLanguage(): void {
    this.eventService.setLanguage(this.language);
  }

}
