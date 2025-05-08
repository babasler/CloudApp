import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'translator-component',
  imports: [FormsModule, SelectModule],
  templateUrl: './translator-component.component.html',
  styleUrl: './translator-component.component.scss',
  standalone: true
})
export class TranslatorComponentComponent implements OnInit {
  cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'Deutsch', code: 'de' },
            { name: 'Englisch', code: 'en' },
            { name: 'Spanisch', code: 'es' },
            { name: 'Schwedisch', code: 's' },
            { name: 'Französisch', code: 'fr' }
        ];
    }

}
