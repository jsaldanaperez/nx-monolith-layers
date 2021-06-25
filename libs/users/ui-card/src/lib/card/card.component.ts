import { Component, Input } from '@angular/core';
import { User } from '@nx-monolith-layers/users/domain';

@Component({
  selector: 'users-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() user: User;
}
