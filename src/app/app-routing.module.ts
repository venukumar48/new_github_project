import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { NotfoundPageComponent } from './components/notfound-page/notfound-page.component';
import { CareersComponent } from './components/careers/careers.component';
import { PermanentComponent } from './components/permanent/permanent.component';
import { ContractComponent } from './components/contract/contract.component';
import { authGuard } from './guards/auth.guard';
import { authGuard2Guard } from './guards/auth-guard2.guard';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotosDetailsComponent } from './components/photos-details/photos-details.component';
import { PhotoresolverService } from './photoresolver.service';
import { ProductlistComponent } from './components/productlist/productlist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'photos',component:PhotosComponent,resolve:{myphotos:PhotoresolverService}},

  // {path:'photodetails/:id',component:PhotosDetailsComponent},
  {path:'photodetails',component:PhotosDetailsComponent},
  // 
  
  {path:'aboutus',component:AboutusComponent,canActivate:[authGuard]},
  {path:'ProductList',component:ProductlistComponent},
  {path:'careers',component:CareersComponent,canActivateChild:[authGuard2Guard],
children:[{path:'permanent',component:PermanentComponent},{path:'contract',component:ContractComponent}]
},
  {path:'',component:HomeComponent},
  // { path: 'grocery', loadChildren: () => import('./grocery/grocery.module').then(m => m.GroceryModule) },
  // 
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path:'**',component:NotfoundPageComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
