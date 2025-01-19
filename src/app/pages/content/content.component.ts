import { Component,OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'appcontent',
  standalone: false,

  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = ""
  cardTitle: string = " Carregando..."
  cardDescription: string = "Carregando..."
  userCreator: string ="Carregando..."
  timeOfPost: string = "Carregando..."
  private id:string | null="0"

constructor(private route:ActivatedRoute){}


ngOnInit(): void {
  this.route.paramMap.subscribe(value => {
    this.id = value.get('id');
    this.setValuesToComponet(this.id);
  });
}

setValuesToComponet(id:string | null){
 const result = dataFake.filter(
  article => article.id.toString() == id)[0]

  this.photoCover = result.photoCover
  this.cardTitle = result.title
  this.cardDescription = result.description
  this.userCreator = result.user
  this.timeOfPost = result.date
}

}
