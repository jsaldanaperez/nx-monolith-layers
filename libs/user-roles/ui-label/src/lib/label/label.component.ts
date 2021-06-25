import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-roles-ui-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent {
  @Input() userRoleId: string;
}
