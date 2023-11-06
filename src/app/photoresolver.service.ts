import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PhotoresolverService implements Resolve<any>{

  constructor(private http:HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

   return this.http.get('https://jsonplaceholder.typicode.com/photos/');
   

  }
}
