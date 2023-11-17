import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { SellerComponent } from './seller/seller.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
  

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: AuthComponent },
  { path: 'productDetail', component: ProductDetailComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'cart', component: CartComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
  
export class AppRoutingModule {}
