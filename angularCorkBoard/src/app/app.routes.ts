import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {VendorComponent} from './vendor/vendor.component';
import {PinDetailsComponent} from './pin/details/pin.details.component';
import {BoardComponent} from './board/board.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Home page',
  },
  {
    path: 'pins/:id',
    component: PinDetailsComponent,
    title: 'Pin Details',
  },
  {
    path: 'vendor/:id',
    component: VendorComponent,
    title: 'VENDOR AAAAAAAAAAAAAAA',
  },
  {
    path: 'board',
    component: BoardComponent,
    title: 'Board',
  },
];
export default routes;
