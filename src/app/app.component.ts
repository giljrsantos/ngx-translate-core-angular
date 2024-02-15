import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private translationService: TranslateService
  ) {
    translationService.addLangs(['en', 'pt', 'es', 'fr']);
    translationService.setDefaultLang('pt');
  }

}
