import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { ModalComponent } from '../../common/modal/modal.component';
import { ProjectsService } from '../../core/services/projects.service';
import { Projects } from '../../core/classes/projectClass';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Projects[] = []

  constructor(private modalService: NgbModal, private projectsService: ProjectsService) { }

  open(project: Projects) {
    let modalRef = this.modalService.open(ModalComponent, { centered: true, size: 'lg' })
    modalRef.componentInstance.title = project.title
    modalRef.componentInstance.subtitle = project.subtitle
    modalRef.componentInstance.description = project.description
    modalRef.componentInstance.client = project.client
    modalRef.componentInstance.category = project.category
    modalRef.componentInstance.url = project.imgUrl
    modalRef.componentInstance.waLink = project.waLink
    modalRef.componentInstance.message = project.message
  }

  ngOnInit() {
    this.projectsService.getProjects().subscribe({
      next: (data) => (this.projects = data),
      error: err => console.log(err)
    })
  }

}
