import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css'
})
export class NewCompComponent {
  title ="Hello world i am code"
  num = 514;
  dataObject: Date = new Date (2020, 1, 20);
  dateString = "2020-02-20T00:00:00.000Z";
  dateNumber = 1521568000000;
}
