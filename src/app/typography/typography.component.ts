import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CoursService} from "../controller/services/cours.service";

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

    mainImage : any ;
    imagesList : Array<any> = [];
    datapk : any ;
    id : any;


  constructor(private route : ActivatedRoute,private coursService : CoursService ) {
    /*console.log("data = "+this.route.snapshot.paramMap.get('image'))*/

  }


    getByPk(id){
        this.coursService.getItem(id).subscribe(
            (data)=>{
                this.datapk = data;
            }
        )
    }


  ngOnInit() {
     this.mainImage = this.route.snapshot.paramMap.get('image');
     this.id = this.route.snapshot.paramMap.get('id');
     this.getByPk(this.id);

  }

}
