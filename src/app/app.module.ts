import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './navigation/app-navbar/navbar.component';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';
import { PageNotFoundComponent} from './navigation/page-not-found/page-not-found.component';
import { ProductGlossaryComponent } from './product/product-glossary/product-glossary.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

// PrimeNG imports
import { ButtonModule } from 'primeng/button';

import { SplitButtonModule } from 'primeng/splitbutton';

import { CarListComponent } from './car/car-list/car-list.component';
import {TableModule} from 'primeng/components/table/table';
import {DataTableModule, Dropdown, MultiSelectModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';

import {SharedModule} from 'primeng/primeng';
import { TransactionComponent } from './transaction/transaction.component';
import {TransactionService} from './transaction/transaction.service';
import {RepositoryService} from './services/repository.service';
import { PrimetableComponent } from './primetable/primetable.component';
import { TableFilterDemoComponent } from './primeng/table-filter-demo.component';
import {Slider} from 'primeng/slider';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {CarService} from './primeng/services/carservice';


// routing - this needs to be moved to a separate file
const appRoutes: Routes = [
  { path: 'inventory-list', component: InventoryListComponent },
  { path: 'product-glossary', component: ProductGlossaryComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'car-list', component: CarListComponent},
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
    ContactUsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CarListComponent,
    TransactionComponent,
    PrimetableComponent,
    TableFilterDemoComponent,
    Slider
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // for debugging purposes only
    ),
    SharedModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    TableModule,
    DropdownModule,
    DataTableModule,
    MultiSelectModule,
    ButtonModule,
    SplitButtonModule
  ],
  providers: [TransactionService, RepositoryService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
