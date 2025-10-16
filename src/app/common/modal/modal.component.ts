import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Input() title!: string 
  @Input() subtitle!: string 
  @Input() description!: string 
  @Input() client!: string 
  @Input() category!: string 
  @Input() url!: string 
  @Input() waLink!: string 
  @Input() message!: string 

  constructor(public modal: NgbActiveModal){}

  ngOnInit(){
  }

  close(){
    this.modal.close()
  }

  openWa(){
    window.open(this.waLink, '_blank', 'noopener,noreferrer')
  }

}
