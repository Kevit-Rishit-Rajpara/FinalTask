import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { SellerComponent } from './seller/seller.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { authGuard } from './auth.gaurd';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', canActivate: [authGuard], component: AuthComponent },
  {
    path: 'productDetail',
    component: ProductDetailComponent,
  },
  { path: 'seller', canActivate: [authGuard], component: SellerComponent },
  { path: 'cart', canActivate: [authGuard], component: CartComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
