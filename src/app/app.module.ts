import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './navigation/app-navbar/navbar.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { PageNotFoundComponent} from './navigation/page-not-found/page-not-found.component';
import { ProductGlossaryComponent } from './product/product-glossary/product-glossary.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


// routing - this needs to be moved to a separate file
const appRoutes: Routes = [
  { path: 'inventory-list', component: InventoryListComponent },
  { path: 'product-glossary', component: ProductGlossaryComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'contact-us', component: ContactUsComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component:  PageNotFoundComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    InventoryListComponent,
    PageNotFoundComponent,
    ProductGlossaryComponent,
    ShoppingCartComponent,
    ContactUsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // for debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
