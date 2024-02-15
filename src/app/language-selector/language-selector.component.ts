import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  constructor(
    private translationService: TranslateService
  ) { }

  changeLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.translationService.use(lang)
  }

}
