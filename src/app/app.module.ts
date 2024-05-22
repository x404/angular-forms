import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserFormComponent } from "./sample02-forms/01_form/user-form.component";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterModule, Routes } from "@angular/router";
import { StylesSampleComponent } from './styles-sample/styles-sample.component';

const appRoutes: Routes = [
  { path: '01_form', component: UserFormComponent},
  { path: '02_styles', component: StylesSampleComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    StylesSampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterLink,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
