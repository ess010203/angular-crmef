import { Component, OnInit } from '@angular/core';
import {NewsService} from "../controller/services/news.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute,private newsService : NewsService) { }

  datapk :any ;
  id :any ;

  getByPk(id){
    this.newsService.getdetails(id).subscribe(
        (data)=>{
          this.datapk = data;
          console.log(data)
        }
    )
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getByPk(this.id);
  }


}
