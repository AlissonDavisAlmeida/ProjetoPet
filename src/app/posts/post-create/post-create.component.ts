
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  @Output()PostEmmit = new EventEmitter<string[]>()
  @Input()newPost : string =""

  constructor() { }

  ngOnInit(): void {
  }

  adicionarPost(nome: HTMLInputElement,post : HTMLTextAreaElement){
    this.PostEmmit.emit([nome.value, post.value])
    nome.value = ""
    post.value = ""
  }

 
}
