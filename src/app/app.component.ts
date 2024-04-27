import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  constructor(){
  //   navigator.setAppBadge(42).then(() => {
  //     console.log("The badge was added");
  // }).catch((e:any) => {
  //     console.error("Error displaying the badge", e);
  // });
  }
}
