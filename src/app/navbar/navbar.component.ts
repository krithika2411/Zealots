import { Component, OnInit } from '@angular/core';
import { navbar} from '../JSONdata/navbar'
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navdata: any;
  user: any;
  constructor(private as: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log(navbar);
    this.navdata = navbar;

    this.as.getUserState().subscribe(res => {
      if (!res) return;
      this.user = res;
      this.as.getprofile(this.user.uid).subscribe((res: any) => {
        // this.role = res.payload.data().role;
      })
    })
  }

}
