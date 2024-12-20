import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'welcome to angular';

  constructor(private service: TodosService) {

  }
  ngOnInit(): void {
    this.setValue()
  }

  updateTitle(value: string) {
    this.title = value
  }
  setValue() {
    this.title = this.service.getTitle()
  }
}
