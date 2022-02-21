import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private property!: string;

  public getProperty(): string {
    return this.property;
  }

  public setProperty(value: string): void {
    this.property = value;
  }
  
}
