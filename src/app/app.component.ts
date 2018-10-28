import { Component, Input } from '@angular/core';
import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'shopping-list';
  featureSelected: string = 'recipe';

  onNavigate(selected: string) {
    this.featureSelected = selected;
  }
}
