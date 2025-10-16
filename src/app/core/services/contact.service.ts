import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { ContactForm } from '../classes/contactFormClass';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient)
  private sheetUrl = ""

  async sendToSheet(formValue: ContactForm) {
    console.log(formValue, ' Enviado desde el servicio');
    return true
    //await firstValueFrom(this.http.post(this.sheetUrl, formValue))
  }

}
