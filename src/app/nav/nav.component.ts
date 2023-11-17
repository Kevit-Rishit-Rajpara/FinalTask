import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { BecomeSellerComponent } from './become-seller/become-seller.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {}
  @ViewChild('dropdownMenu', { static: true }) dropdownMenu:
    | ElementRef
    | undefined;

  ngOnInit(): void {}
  isSeller = localStorage.getItem('isSeller');
  isLogin = localStorage.getItem('isLogin')
  showProfile = false

  onToggleMenu() {
    console.log('click');
    if (this.dropdownMenu) {
      this.dropdownMenu.nativeElement.style.display = 'visible';
    }
  }

  openPopup(enterAnimationDuration: any, exitAnimationDuration: any) {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '75vw',
      height: '80vh',
      enterAnimationDuration,
      exitAnimationDuration,
    });
     dialogRef.afterClosed().subscribe((result) => {
       // Handle any actions after the dialog is closed, if needed
     });
  }

  onBecome() {
    this.dialog.open(BecomeSellerComponent, {
      width: 'fit-content',
      height: 'fit-content',
    });
  }

  onNavigateSeller() {
    this.router.navigate(['/seller']);
  }
  
  onNavigateCart() {
    this.router.navigate(['/cart'])
  }

  onLogout() {
    // console.log("logout");
    localStorage.clear();
  }
}
