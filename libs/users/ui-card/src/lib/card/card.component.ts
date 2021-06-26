import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@nx-monolith-layers/users/domain';

@Component({
  selector: 'users-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() user: User;
  @Input() userRole: string;
  @Output() clicked = new EventEmitter();
}
