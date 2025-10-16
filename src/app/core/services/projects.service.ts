import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Projects } from '../classes/projectClass';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Projects[] = []
  private readonly projectsUrl = './assets/data/projects.json'

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this.projectsUrl)
  }
}
