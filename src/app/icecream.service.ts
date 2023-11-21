import { Injectable } from '@angular/core';
import { Icecream } from './icecream.interface';

@Injectable({
  providedIn: 'root'
})
export class IcecreamService {

  icecreams:Icecream[]=[
    {Name:"Chocolate",Cost:30},
    {Name:"Vanilla",Cost:20},
    {Name:"BlackForest",Cost:80},
    
  ];

  getIcecreams():Icecream[]{
    return this.icecreams;
  }

 
}
