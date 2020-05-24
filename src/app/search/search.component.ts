import { Component, OnInit } from '@angular/core';
import { tassks } from './tasks';
import { HeroService } from '../hero.service';

export interface PeriodicElement {
  taskname: string;
  type: string;
  date1: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {taskname: 'Prashant', type: 'Personal', date1:5/5/2020, status: 'New'},
  {taskname: 'Swarnesh', type: 'Work', date1:4/5/2020, status: 'In-progress'},
  {taskname: 'Ravi', type: 'Shopping', date1:1/5/2020, status: 'New'},
  {taskname: 'Rohith', type: 'Others', date1:5/5/2020, status: 'New'},
  {taskname: 'Swathi', type: 'Personal', date1:6/5/2020, status: 'Completed'},
  {taskname: 'Vamsi', type: 'Personal', date1:8/5/2020, status: 'Completed'},
  {taskname: 'Yuvarj', type: 'Work', date1:9/5/2020, status: 'In-Progress'},
];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['taskname', 'type', 'date1', 'status'];
  dataSource = ELEMENT_DATA;
  tasks: tassks[];
  errorMessage: string;

  /*newTask: tassks = { '_id': 11, 'description': 'something' };*/ 

  constructor(private heroService: HeroService) { }

  getTask() {
      this.heroService.getTask().subscribe(
      tasks => this.tasks = tasks,
      error => this.errorMessage = <any>error);
  }

  addTask(id, description) {
      this.heroService.addTask({ '_id': id, 'description': description })
      .subscribe(hero => this.tasks.push(hero));
  }

  updateBook(id, description) {
    this.bookService.updateTask({ '_id': id, 'description': description })
      .subscribe(hero => this.tasks = hero);
  }

  deleteBook(_id: number) {
    this.bookService.deleteTask(_id)
      .subscribe(hero => this.tasks = hero);
  }

  ngOnInit(): void {
    this.getTask();
  }

}

