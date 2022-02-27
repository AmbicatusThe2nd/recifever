import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = this.getUserNameFromToken();
  }

  ngOnClickAddNew(): void {
    this.router.navigate(['/add-new']);
  }

  ngOnClickHome(): void {
    this.router.navigate(['/recipes'])
  }

  ngOnClickLogout(): void {
    localStorage.removeItem("jwt");
    this.router.navigate(["/login"]);
  }

  private getUserNameFromToken(): string {
    const token: string = localStorage.getItem('jwt') as string;
    const decodedJWT = JSON.parse(window.atob(token.split('.')[1]));

    return decodedJWT.userName;
  }
}
