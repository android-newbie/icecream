import { Component } from '@angular/core';
import { Icecream } from '../icecream.interface';
import { IcecreamService } from '../icecream.service';

@Component({
  selector: 'app-icecream-details',
  templateUrl: './icecream-details.component.html',
  styleUrls: ['./icecream-details.component.css']
})
export class IcecreamDetailsComponent {

  icecreams: Icecream[] = this.icecreamService.getIcecreams();

  constructor(private icecreamService: IcecreamService) {}

}
