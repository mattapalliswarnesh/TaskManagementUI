import { Component, OnInit } from '@angular/core';
import {HeroService} from '../../hero.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public service: HeroService) { }

  ngOnInit(): void {
  }

}
