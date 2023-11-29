import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from 'src/app/auth/auth.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-become-seller',
  templateUrl: './become-seller.component.html',
  styleUrls: ['./become-seller.component.css'],
})
export class BecomeSellerComponent {
  constructor(private router: Router, public dialog: MatDialog) {}

  enableSellerMode(enterAnimationDuration: any, exitAnimationDuration: any) {
    if (localStorage.getItem('isLogin')) {
       const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 1500,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer);
           toast.addEventListener('mouseleave', Swal.resumeTimer);
         },
       });
       Toast.fire({
         icon: 'success',
         title: 'Now You are Seller',
       });
      localStorage.setItem('isSeller', 'true');
    } else {
       const Toast = Swal.mixin({
         toast: true,
         position: 'bottom-end',
         showConfirmButton: false,
         timer: 1000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer);
           toast.addEventListener('mouseleave', Swal.resumeTimer);
         },
       });
       Toast.fire({
         icon: 'error',
         title: 'You need to login First',
       });
      this.dialog.open(AuthComponent, {
        width: '75vw',
        height: '80vh',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
  }
}
