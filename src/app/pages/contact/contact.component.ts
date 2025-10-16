import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactService } from '../../core/services/contact.service';
import { ContactForm } from '../../core/classes/contactFormClass';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {

  private fb = inject(FormBuilder)
  private Contact = inject(ContactService)

  formSubmitted = false;
  formStatus: 'idle' | 'success' | 'error' = 'idle';

  contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    message: ['', Validators.required]
  })

  async onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.invalid) return

    const formValue: ContactForm = this.contactForm.value as any;

    try {
      await this.Contact.sendToSheet(formValue)

      const waNumber = '593996743228';
      const text = `Hola, soy ${formValue.name}. Mi número es ${formValue.phone}.%0A%0A${formValue.message}`;
      const waLink = `https://wa.me/${waNumber}?text=${text}`;
      window.open(waLink, '_blank', 'noopener,noreferrer');

      this.contactForm.reset();
      this.formStatus = 'success'
      setTimeout(() => (this.formStatus = 'idle'), 4000);
    } catch (error) {
      console.error(error)
      this.formStatus = 'error'
      setTimeout(() => (this.formStatus = 'idle'), 4000);
    }
  }

}
