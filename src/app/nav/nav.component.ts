import {
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../auth/auth.component';
import { BecomeSellerComponent } from './become-seller/become-seller.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, DoCheck {
  constructor(public dialog: MatDialog, private router: Router) {}
  @ViewChild('dropdownMenu', { static: true }) dropdownMenu:
    | ElementRef
    | undefined;

  isSeller = localStorage.getItem('isSeller');
  isLogin = localStorage.getItem('isLogin');
  showProfile = false;
  fName = localStorage.getItem('fName');
  lName = localStorage.getItem('lName');
  email = localStorage.getItem('email');
  displayMenu = false

  ngOnInit(): void {
    console.log(this.isSeller + "   onInit");
    
  }

  ngDoCheck() {
    this.isSeller = localStorage.getItem('isSeller');
    this.isLogin = localStorage.getItem('isLogin');
    this.fName = localStorage.getItem('fName')
    this.lName = localStorage.getItem('lName')
    this.email = localStorage.getItem('email')
    // console.log(this.isSeller);
    
  }

  onToggleMenu() {
    console.log('click');
    
    this.displayMenu = !this.displayMenu
  }

  openPopup(enterAnimationDuration: any, exitAnimationDuration: any) {
    const dialogRef = this.dialog.open(AuthComponent, {
      width: '75vw',
      height: '80vh',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe((result) => {
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
    this.router.navigate(['/cart']);
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(['/home'])
  }
}
