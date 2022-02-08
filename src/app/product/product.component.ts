import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
// import { DatabaseopService } from '../services/databaseop.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  user: any;
  products:any;

  constructor(private as: AuthService, private router: Router,private db: AngularFirestore) { }

  ngOnInit(): void {
    this.getProducts();
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
    });
  }
  getProducts(){
    this.db.collection("Products").snapshotChanges().subscribe((res: any) => {
      this.products = res;
      console.log(this.products);
    })
  }
}
