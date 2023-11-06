import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from 'src/login/login.module';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObservableDemo1Component } from './components/observable-demo1/observable-demo1.component';
import { SubjectdemoComponent } from './components/subjectdemo/subjectdemo.component';
import { SendmessageComponent } from './components/sendmessage/sendmessage.component';
import { RecivemessageComponent } from './components/recivemessage/recivemessage.component';
import { AddToDoComponent } from './components/add-to-do/add-to-do.component';
import { ToDoList1Component } from './components/to-do-list1/to-do-list1.component';
import { ToDoList2Component } from './components/to-do-list2/to-do-list2.component';
import { Templatefrom1Component } from './components/templatefrom1/templatefrom1.component';
import { ModelDrivenForm1Component } from './components/model-driven-form1/model-driven-form1.component';
import { ModelDrivenForm2Component } from './components/model-driven-form2/model-driven-form2.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { Router } from '@angular/router';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';
import { CareersComponent } from './components/careers/careers.component';
import { PermanentComponent } from './components/permanent/permanent.component';
import { ContractComponent } from './components/contract/contract.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotosDetailsComponent } from './components/photos-details/photos-details.component';
import { Testing1Component } from './components/testing1/testing1.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BodyComponent,
    ProductlistComponent,
    EmployeelistComponent,
    ProductsComponent,
    ObservableDemo1Component,
    SubjectdemoComponent,
    SendmessageComponent,
    RecivemessageComponent,
    AddToDoComponent,
    ToDoList1Component,
    ToDoList2Component,
    Templatefrom1Component,
    ModelDrivenForm1Component,
    ModelDrivenForm2Component,
    HomeComponent,
    AboutusComponent,
    NotfoundPageComponent,
    CareersComponent,
    PermanentComponent,
    ContractComponent,
    PhotosComponent,
    PhotosDetailsComponent,
    Testing1Component,
    UsersComponent
  ],
 

  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,LoginModule,NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HeaderComponent,FooterComponent]
})
export class AppModule { }
