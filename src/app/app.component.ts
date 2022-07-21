import { Component } from '@angular/core';
import {CommonUtil} from "./services/commonUtil";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visionLibraryFE';

  constructor(public commonUtil: CommonUtil) {
  }
}

