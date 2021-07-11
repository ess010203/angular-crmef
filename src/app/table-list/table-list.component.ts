import { Component, OnInit } from '@angular/core';
import {CoursService} from "../controller/services/cours.service";
import {CategoryService} from "../controller/services/category.service";

interface Food {
    value: string;
    viewValue: string;
}

interface Car {
    value: string;
    viewValue: string;
}


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private coursService : CoursService,private categoryService : CategoryService) { }

  mydata : any = [];
  cherche : any;
  p : number = 1;
  listCategory:any;



  getList(){
    this.coursService.getList().subscribe(
        (data) => {
            this.mydata = data
        },error => {
        })
  }

    getListCategory(){
        this.categoryService.getList().subscribe(
            (data) => {
                this.listCategory = data
            },error => {
            })
    }



  ////////////////////////


  ////////////////////////




  Search(){
      if(this.cherche == ""){
          this.ngOnInit();
      }else{
          this.mydata = this.mydata.filter(res => {
              return res.title.toLocaleLowerCase().match(this.cherche.toLocaleLowerCase())
          })
      }
  }


   /* SearchByCategorie(){
        if(this.listCategory == ""){
            this.ngOnInit();
        }else{
            this.mydata = this.mydata.filter(res => {
                return res.title.toLocaleLowerCase().match(this.listCategory.toLocaleLowerCase())
            })
        }
    }*/


  ngOnInit() {
    this.getListCategory()
    this.getList();

  }

}
