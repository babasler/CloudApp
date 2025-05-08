import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatorComponentComponent } from "./translator-component/translator-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatorComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SmartTranslateFrontend';
}
