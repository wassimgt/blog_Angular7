import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Posts = [{title: 'post one', content: 'salut openclassroom............................', loveit: 3 } ,
   {title: 'post two', content: 'salut openclassroom 2..........................................', loveit: 4 },
   {title: 'post three', content: 'salut openclassroom 3...........................................', loveit: 0 }
  ];
  constructor() { }
}
