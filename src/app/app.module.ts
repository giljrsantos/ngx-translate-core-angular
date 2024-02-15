import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CardNewsComponent } from './card-news/card-news.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import localeEN from '@angular/common/locales/en';
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

registerLocaleData(localePT);
registerLocaleData(localeEN);
registerLocaleData(localeES);
registerLocaleData(localeFR);

@NgModule({
  declarations: [AppComponent, LanguageSelectorComponent, CardNewsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
