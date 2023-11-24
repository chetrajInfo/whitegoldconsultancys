import {  Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-headerpage',
  templateUrl: './headerpage.component.html',
  styleUrls: ['./headerpage.component.css']
})
export class HeaderpageComponent {
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
     console.log(this.isMenuOpen); // Check the value in the browser's console
  }

}
