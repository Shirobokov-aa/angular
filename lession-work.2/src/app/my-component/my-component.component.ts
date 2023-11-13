import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from '../second/second.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';    // библиотека для работы с формами (надо подключать расширение Angular Language Service)

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule, SecondComponent, ReactiveFormsModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent {
  username = 'Anton';       //  создали условие
  isLogin = false;          // создали будевое условие
  users = [
    { id: 0, name: 'Alex' },
    { id: 1, name: 'Tigran' },
    { id: 2, name: 'Anna' },
  ];
  greet(){
    alert(`hello ${this.username}`);
  }
  profileForm = new FormGroup({      //Сперва создвем объект
    name: new FormControl(''),
    email: new FormControl(''),

  });
  sumbit(){
    alert(`${[this.profileForm.value.name]} and ${[this.profileForm.value.email]}`);
  }
}
