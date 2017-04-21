import {Component, OnInit, HostBinding} from '@angular/core';
import {trigger, transition, style, animate} from "@angular/animations";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
  animations: [slideToLeft()]
})
export class CalcComponent implements OnInit {

  @HostBinding('@routerTransition')
  @HostBinding('class.container') true

  constructor() { }

  ngOnInit() {
  }

}

function slideToLeft() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({transform: 'translateX(200%)', position: 'fixed', width: '100%'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)', position: 'fixed', width: '100%'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-200%)'}))
    ])
  ])
}
