import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {JannineComponent} from "./jannine/jannine.component";
import {TrackDetailComponent} from "./jannine/track-detail.component";
import {JanineService} from "./jannine/jannine.service";
import {TestDirective} from "./test/test.directive";

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand' hello-world>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Products']">Product List</a></li>
                    <li><a [routerLink]="['Jannine']">Jannine</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES, TestDirective],
    providers: [ProductService,
        HTTP_PROVIDERS,
        JanineService,
        ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/products', name: 'Products', component: ProductListComponent},
    {path: '/product/:id', name: 'ProductDetail', component: ProductDetailComponent},
    {path: "/jannine", name: "Jannine", component: JannineComponent},
    {path: "/jannine/:id", name: "TrackDetail", component: TrackDetailComponent}
])
export class AppComponent {
    pageTitle:string = 'Acme Product Management';
}

