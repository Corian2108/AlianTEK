import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MidbarComponent } from './midbar/midbar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeaderComponent, FooterComponent, MidbarComponent
  ]
})
export class LayouttModule { }
