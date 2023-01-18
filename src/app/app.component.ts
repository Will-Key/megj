import { Component, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'megj';
  url!: string

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if(event instanceof NavigationStart) {
            this.url = event.url
          }
        }
      )
  }
}
