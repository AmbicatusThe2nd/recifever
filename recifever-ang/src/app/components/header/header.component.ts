import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}
