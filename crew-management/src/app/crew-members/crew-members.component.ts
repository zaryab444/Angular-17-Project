import { Component } from '@angular/core';
import { CrewDesignationsComponent } from '../crew-designations/crew-designations.component';

@Component({
  selector: 'app-crew-members',
  standalone: true,
  imports: [CrewDesignationsComponent],
  templateUrl: './crew-members.component.html',
  styleUrl: './crew-members.component.scss'
})
export class CrewMembersComponent {

}
