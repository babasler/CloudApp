import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

interface language {
  name: string;
  code: string;
}

@Component({
  selector: 'translator-component',
  imports: [FormsModule, SelectModule, TextareaModule, IftaLabelModule, ButtonModule, CardModule],
  templateUrl: './translator-component.component.html',
  styleUrl: './translator-component.component.scss',
  standalone: true
})
export class TranslatorComponentComponent implements OnInit {
  possibleLanguages: language[] = [];
  sourceLanguage: language = { name: '', code: '' };
  targetLanguage: language = { name: '', code: '' };
  sourceText:string = '';
  targetText:string = '';

  ngOnInit() {
    this.possibleLanguages = [
      { name: 'Deutsch', code: 'de' },
      { name: 'Englisch', code: 'en' },
      { name: 'Spanisch', code: 'es' },
      { name: 'Schwedisch', code: 's' },
      { name: 'Französisch', code: 'fr' } // TODO: Hier mit Restabfrage arbeiten
    ];
  }

  canTranslate(): boolean {
    return this.sourceLanguage.name.length > 0 && this.targetLanguage.name.length > 0&& this.sourceText.length > 0;
  }
  translate(): void {
    this.targetText = "Hallo Welt"; // TODO: Hier mit Restabfrage arbeiten
  }

}
