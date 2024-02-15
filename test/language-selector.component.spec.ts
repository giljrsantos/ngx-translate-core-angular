import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { LanguageSelectorComponent } from '../src/app/language-selector/language-selector.component';

describe('LanguageSelectorComponent', () => {
  let translationService: TranslateService;
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageSelectorComponent],
      imports: [TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    translationService = TestBed.inject(TranslateService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve alterar o idioma da pagina assim que for alterado changeLanguage()', () => {
    // Mocando objeto Event necessário
    const mockEvent = {
      target: {
        value: 'pt' // Supondo que 'pt' seja um código de idioma válido em seu aplicativo
      } as HTMLSelectElement
    } as unknown as Event;
    // Espiando o método de serviço de tradução
    const translationServiceSpy = jest.spyOn(translationService, 'use');
    // Chamamdo a função com o evento simulado
    component.changeLanguage(mockEvent);
    // Expectativa
    expect(translationServiceSpy).toHaveBeenCalledWith('pt');
  })

});
