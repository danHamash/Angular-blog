import { Component,Input,OnInit, } from '@angular/core';
@Component({
  selector: 'smallcard',
  standalone: false,

  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css','./small-card-responsive.component.css']
})
export class SmallCardComponent implements OnInit{

  @Input()
  photoCover: string =""
  @Input()
  cardTitle: string =""
  @Input()
  cardDescription: string =""
  @Input()
  userCreator: string =""
  @Input()
  timeOfPost:string =""
  @Input()
  id:string ="0"


constructor(){}
ngOnInit(): void {

}
}
