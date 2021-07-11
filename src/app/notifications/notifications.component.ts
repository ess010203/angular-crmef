import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private http : HttpClient) { }

  dataquizzes :any ;
  dataansers:any ;
  p : number = 1;
  question : any ;
  voirreponce = false;
  n : number = 0;


  getQuizes(){
      this.http.get('http://127.0.0.1:8000/api/quizzes/').subscribe(
          data =>{
              console.log("data ==== " +data)
           this.dataquizzes = data
          }
      )
  }
  getAnsewer(){
        this.http.get('http://127.0.0.1:8000/api/answer/').subscribe(
            data =>{
                console.log("data ==== " +data)
                this.dataansers = data
            }
        )
    }

    getQuestion(){
        this.http.get('http://127.0.0.1:8000/api/question/').subscribe(
            data =>{
                console.log("data ==== " +data)
                this.question = data
            }
        )
    }

    ngOnInit() {
        this.getQuestion()
    }

  /*showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: "notifications",
          message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }*/


    repense(verified) {
        this.n = verified;
        this.voirreponce = true;

         console.log(this.n)
    }
}
