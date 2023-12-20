import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthServiceService){}

  isAuthenticated(){    
    return this.authService.isAuthenticated();
  }
  doLogout(){
    console.log("click");
    this.authService.logout();
  }
}
