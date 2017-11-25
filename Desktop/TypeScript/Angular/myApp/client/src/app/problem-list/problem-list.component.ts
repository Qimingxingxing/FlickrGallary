import { Component, OnInit } from '@angular/core';
import { Problem } from '../dataStructure/Problem';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {
  problems: Problem[] = [];
  constructor(private data: DataService) { }
  
  ngOnInit() {
    this.getProblems();
  }
  getProblems(){
    this.problems = this.data.getProblems();
  }
}
