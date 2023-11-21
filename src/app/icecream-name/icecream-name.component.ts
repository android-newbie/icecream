import { Component } from '@angular/core';
import { Icecream } from '../icecream.interface';
import { IcecreamService } from '../icecream.service';

@Component({
  selector: 'app-icecream-name',
  templateUrl: './icecream-name.component.html',
  styleUrls: ['./icecream-name.component.css']
})
export class IcecreamNameComponent {
  icecreams: Icecream[] = this.icecreamService.getIcecreams();

  constructor(private icecreamService: IcecreamService) {}
}
