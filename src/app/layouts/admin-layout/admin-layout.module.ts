import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from "ngx-pagination";
import {QuizzesComponent} from "../../quizzes/quizzes.component";
import {QuizDetailComponent} from "../../quizzes/quiz-detail/quiz-detail.component";
import {QuizListComponent} from "../../quizzes/quiz-list/quiz-list.component";
import {QuizResultComponent} from "../../quizzes/quiz-result/quiz-result.component";
import {QuestionComponent} from "../../quizzes/quiz-detail/question/question.component";
import {AnswerComponent} from "../../quizzes/quiz-detail/question/answer/answer.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxPaginationModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    NotificationsComponent,
    QuizzesComponent,
    QuizDetailComponent,
    QuizListComponent,
    QuizResultComponent,
    QuestionComponent,
    AnswerComponent,

  ]
})

export class AdminLayoutModule {}
