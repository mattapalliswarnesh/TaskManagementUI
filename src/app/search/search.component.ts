import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { tassks } from './tasks';
import { HeroService } from '../hero.service';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  taskname: string;
  type: string;
  date1: number;
  duedate: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {taskname: 'Prashant', type: 'Personal', date1:5/5/2020,duedate: 10/5/2020 ,status: 'New'},
  {taskname: 'Swarnesh', type: 'Work', date1:4/5/2020,duedate: 10/5/2020, status: 'In-progress'},
  {taskname: 'Ravi', type: 'Shopping', date1:1/5/2020,duedate: 10/5/2020, status: 'New'},
  {taskname: 'Rohith', type: 'Others', date1:5/5/2020,duedate: 10/5/2020, status: 'New'},
  {taskname: 'Swathi', type: 'Personal', date1:6/5/2020,duedate: 10/5/2020, status: 'Completed'},
  {taskname: 'Vamsi', type: 'Personal', date1:8/5/2020,duedate: 10/5/2020, status: 'Completed'},
  {taskname: 'Yuvarj', type: 'Work', date1:9/5/2020,duedate: 10/5/2020, status: 'In-Progress'},
  {taskname: 'Prashant', type: 'Personal', date1:5/5/2020,duedate: 10/5/2020 ,status: 'New'},
  {taskname: 'Swarnesh', type: 'Work', date1:4/5/2020,duedate: 10/5/2020, status: 'In-progress'},
  {taskname: 'Ravi', type: 'Shopping', date1:1/5/2020,duedate: 10/5/2020, status: 'New'},
  {taskname: 'Rohith', type: 'Others', date1:5/5/2020,duedate: 10/5/2020, status: 'New'},
  {taskname: 'Swathi', type: 'Personal', date1:6/5/2020,duedate: 10/5/2020, status: 'Completed'},
  {taskname: 'Vamsi', type: 'Personal', date1:8/5/2020,duedate: 10/5/2020, status: 'Completed'},
  {taskname: 'Yuvarj', type: 'Work', date1:9/5/2020,duedate: 10/5/2020, status: 'In-Progress'},
];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['taskname', 'type', 'date1','duedate', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  tasks: tassks[];
  errorMessage: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  /*newTask: tassks = { '_id': 11, 'description': 'something' };*/ 

  constructor(private heroService: HeroService,public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  /* getTask() {
      this.heroService.getTask().subscribe(
      tasks => this.tasks = tasks,
      error => this.errorMessage = <any>error);
  } */

  /* addTask(id, description) {
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
  } */

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    /* this.getTask(); */
  }

}
@Component({
  selector: 'app-add-task',
  templateUrl: '../add-task.component.html',
  styleUrls: ['./../add-task.component.css']
})
export class DialogContentExampleDialog implements OnInit {}

