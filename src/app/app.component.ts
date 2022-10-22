import { Component, VERSION } from '@angular/core';
import { ApiHelperService } from './core/services/api-helper.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(protected apiHelper: ApiHelperService) {
    this.apiHelper.get<any>('');
  }
}
