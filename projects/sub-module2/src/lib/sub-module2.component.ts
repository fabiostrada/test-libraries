import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sub-module2',
  template: `
    <p>
      sub-module2 works!
    </p>
  `,
  styles: [
  ]
})
export class SubModule2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
