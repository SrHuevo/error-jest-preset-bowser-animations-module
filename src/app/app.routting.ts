import {CalcComponent} from "./calc/calc.component";
import {Routes, RouterModule} from "@angular/router";


export const APP_ROUTES: Routes = [
  {
    path: 'calc', component: CalcComponent
  }
]

export const routing = RouterModule.forRoot(APP_ROUTES)
