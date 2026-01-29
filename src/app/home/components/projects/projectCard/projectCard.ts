import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './projectCard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  title = input.required<string>()
  category = input.required<string>()
  description = input.required<string>()
  metrics = input.required<string>()
  index = input.required<number>()
 }
