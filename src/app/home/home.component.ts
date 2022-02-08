import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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