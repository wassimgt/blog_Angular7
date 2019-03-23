import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() title: string;
  @Input() content: string ;
  @Input() loveit:  number ;
   create_At = new  Date();
  constructor() { }

  ngOnInit() {
  }
onlove() {

  this.loveit = this.loveit + 1;
}
ondlove(){
  this.loveit = this.loveit - 1 ;
}
}
