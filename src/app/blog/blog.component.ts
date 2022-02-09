import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  user: any;
  currenblogs:any;
  links: Array<any> = [];
  res: any;
  constructor(private as: AuthService, private router: Router,private db:AngularFirestore ) { }

  ngOnInit(): void {
    this.bloglink();
    // this.as.getUserState().subscribe(res => {
    //   if (!res) this.router.navigate(['/signin'])
    //   this.user = res;
    // });
  }
  currentlinkclick(currblogs:any){
    this.currenblogs= currblogs;
  }
  
  bloglink(){
    this.db.collection(`Blogs`).snapshotChanges().subscribe((res: any[]) => {
      this.links = res;
      this.currenblogs= this.links[0];
      console.log('success');
    })
    // console.log(this.bloglink);
  }
}
