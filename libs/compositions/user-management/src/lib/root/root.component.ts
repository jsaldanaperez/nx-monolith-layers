import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'compositions-user-management-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute){}
  navigate = (id: string) => this.router.navigate([id], { relativeTo: this.activatedRoute});
}