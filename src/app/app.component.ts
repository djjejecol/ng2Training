/*
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    require('./app.css')
  ],
  template: require('./app.component.html')
})
export class App implements OnInit{
  constructor() {}

  ngOnInit() {
    console.log('App started');
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
