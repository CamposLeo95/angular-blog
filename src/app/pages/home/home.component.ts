import { Component, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataFake = dataFake

  mainId = dataFake[0].id
  mainTitle = dataFake[0].title
  mainPhoto = dataFake[0].photo
  mainDescription = dataFake[0].description

  constructor(){

  }

  ngOnInit(){
    this.removeArticleMain()
  }

  removeArticleMain(){
     this.dataFake = dataFake.filter(article => article.id !== "1")
  }
}
