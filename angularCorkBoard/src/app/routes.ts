import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {VendorComponent} from './vendor/vendor.component';
import {PinDetailsComponent} from './pin/details/pin.details.component';
import {BoardComponent} from './board/board.component';

export const routeConfig: Routes = [
    {
        path: '',
        component: AppComponent,
        title: 'Home page',
    },
    {
      path: 'board',
      component: BoardComponent,
      title: 'Board',
    },
    {
        path: 'pins/:id',
        component: PinDetailsComponent,
        title: 'Pin Details',
    },
];
export default routeConfig;
