import { Component } from '@angular/core';

import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-terms',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
  mail = "aliantek@outlook.es"
  mailLink="mailto:aliantek@outlook.es"
}
