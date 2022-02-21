import { Injectable, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from './shared.module';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  deps: [[new Optional(), new SkipSelf(), SharedService]],
  providedIn: SharedModule,
  useFactory: (instance: SharedService | null) => instance || new SharedService(),
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
