import { Component, OnInit } from '@angular/core';
import {CoursService} from "../controller/services/cours.service";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private coursService : CoursService) { }

  mydata : any = [];
  cherche : any;
  p : number = 1;


  getList(){
    this.coursService.getList().subscribe(
        (data) => {
            console.log( 'data = ' + data)
            this.mydata = data
        },error => {
          console.log('eroooooooor = ' + error)
        })
  }




  Search(){
      if(this.cherche == ""){
          this.ngOnInit();
      }else{
          this.mydata = this.mydata.filter(res => {
              return res.title.toLocaleLowerCase().match(this.cherche.toLocaleLowerCase())
          })
      }
  }


  ngOnInit() {

    this.getList();

  }

}
