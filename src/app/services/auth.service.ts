import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  getLog(log: string): void {
    console.log(`Seu log: ${log}`);
  }
}
