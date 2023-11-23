import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from 'src/app/auth/auth.component';

@Component({
  selector: 'app-become-seller',
  templateUrl: './become-seller.component.html',
  styleUrls: ['./become-seller.component.css'],
})
export class BecomeSellerComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  enableSellerMode(enterAnimationDuration: any, exitAnimationDuration: any) {
    if (localStorage.getItem('isLogin')) {
      
      alert('Now You are Seller');
      localStorage.setItem('isSeller', 'true');
    } else {
      alert('you need to login First');
      this.dialog.open(AuthComponent, {
        width: '75vw',
        height: '80vh',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
  }
}
