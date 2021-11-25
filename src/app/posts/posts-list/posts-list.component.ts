import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
 
  @Input()posts :[{nome?:string,conteudo?:string}]
  constructor() { }

  ngOnInit(): void {
    
  }



}
