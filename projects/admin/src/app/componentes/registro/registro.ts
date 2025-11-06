import { FormsModule } from '@angular/forms';
import { User } from './../../../../../shared/src/lib/modelos/usr.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  public user: User = {
    username: '',
    email: '',
    role: 'user', 
    acceptTerms: false
  };

 
  public submitted: boolean = false;
  public userResult: User | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  
  onSubmit(formValue: any) {
    this.submitted = true;
    this.userResult = formValue;
    console.log('Datos enviados:', formValue);
  }

  get diagnostic() {
    return JSON.stringify(this.user, null, 2);
  }
}
