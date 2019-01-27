import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes} from '@angular/router';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { SummaryPipe } from './summary.pipe';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';
import { DataService } from './services/data-service';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { TextFormatDirective } from './directives/text-format.directive';
import { BlogItemCreateComponent } from './components/blog-item-create/blog-item-create.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './services/auth/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {AuthService} from './services/auth/auth.service';
import { AdminGuard } from './services/admin-guard.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'quiz',
    component: QuizComponent,
    canActivate: [AdminGuard],
           data: {state: 'admin'}
  },
  {
    path: 'blog',
    component: BlogHomeComponent
  },
  {
    path: 'blog/details/:id',
    component: BlogItemDetailComponent
  },
  {
    path: 'blog/add',
    component: BlogItemCreateComponent
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
    path: 'register',
    component: SignupComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponent,
    NavbarComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    SummaryPipe,
    BlogComponent,
    BlogItemDetailComponent,
    FilterPipe,
    SearchbarComponent,
    BlogHomeComponent,
    TextFormatDirective,
    BlogItemCreateComponent,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService,
  AuthService,
  {
         provide: HTTP_INTERCEPTORS,
         useClass: AuthInterceptor,
         multi: true
     }
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
