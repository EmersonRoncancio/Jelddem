import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {

  values = signal<string[]>([
  "Código limpio y documentado",
  "Metodologías ágiles (Scrum/Kanban)",
  "Comunicación transparente",
  "Entregas a tiempo garantizadas",
  "Soporte post-implementación",
  "Seguridad como prioridad",
  ]);

 }
