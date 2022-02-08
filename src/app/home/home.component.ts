import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.as.getUserState().subscribe(res => {
      if (!res) this.router.navigate(['/signin'])
      this.user = res;
    });
  }

}
// var texts = new Array();
//             texts.push("Krithika");
//             texts.push("Tanve");
//             texts.push("Preethika");
//             texts.push("Tanvee");

//             var point = 0;
//             function changeText() {
//                 $('sent-gen').html(texts[point]);
//                 if(point < texts.length){
//                     point++
//                 }else{
//                     point = 0;
//                 }
//             }
//             changeText();
//             setInterval(changeText, 5000) 