import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ProjectCard } from "./projectCard/projectCard";

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  projects = signal([
    {
      title: "FinTrack Pro",
      category: "Fintech",
      description:
        "Plataforma de gestión financiera empresarial con análisis predictivo y reportes en tiempo real.",
      metrics: "300% ROI para clientes",
       },
    {
       title: "MediConnect",
       category: "HealthTech",
       description:
         "Sistema integral de gestión hospitalaria con telemedicina y expediente clínico electrónico.",
       metrics: "50+ hospitales conectados",
     },
    {
       title: "LogiFlow",
       category: "Logística",
       description:
         "Solución de optimización logística con tracking en tiempo real e inteligencia artificial.",
       metrics: "40% reducción en costos",
     },
  ])
}
