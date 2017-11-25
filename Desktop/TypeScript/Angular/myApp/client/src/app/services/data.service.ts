import { Injectable } from '@angular/core';
import { Problem } from '../dataStructure/Problem';
import { PROBLEMS } from '../mockProblems';

@Injectable()
export class DataService {
  problems: Problem[] = PROBLEMS;
  constructor() { }

  getProblems(){
    return this.problems;
  }

  getProblem(id): Problem{
    return this.problems.find(mem => mem.id == id);
  }

  addProblem(problem: Problem){
    problem.id = this.problems.length + 1;
    this.problems.push(problem);
  }
}
