import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-sub-module1',
  template: `
    <p>
      sub-module1 works!
    </p>
  `,
  styles: [
  ]
})
export class SubModule1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
