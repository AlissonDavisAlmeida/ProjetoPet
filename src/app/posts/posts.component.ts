import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: [{nome?:string,conteudo? : string}] = [{}]
  constructor() { }

  ngOnInit(): void {
    if(this.post.length ==1){
      this.post.splice(0,1)
    }
  }

  adicionarEvento(evento){
    
    this.post.push({nome:evento[0],conteudo:evento[1]})
  }
}
