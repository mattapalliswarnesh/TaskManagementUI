import { Component, OnInit } from '@angular/core';

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
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
