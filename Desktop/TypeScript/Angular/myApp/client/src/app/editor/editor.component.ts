import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DEFAULTCONTENT } from '../DefaultContent';
declare const ace:any; 
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  languages: string[] = ["java", "python", "cpp"];
  language: string = "java";
  editor: any;
  output: string;
  defaultContent = DEFAULTCONTENT;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/github");
    this.editor.getSession().setMode("ace/mode/python");
    this.resetEditor();
  }

  setLanguage(language: string){
    this.language = language;
    this.resetEditor();
  }

  resetEditor(){
    this.editor.getSession().setMode(`ace/mode/${this.language}`);
    this.editor.setValue(this.defaultContent[this.language]);
    this.output = '';    
  }

  submit(){

  }
}
