import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Technologies {

  technologies = signal<{ name: string; category: string; url: string  }[]>([
    { name: "React", category: "Frontend", url:"https://es.react.dev/" },
    { name: "Next.js", category: "Framework", url:"https://nextjs.org/" },
    { name: "TypeScript", category: "Language", url:"https://www.typescriptlang.org/" },
    { name: "Node.js", category: "Backend", url:"https://nodejs.org/en" },
    { name: "Java", category: "Backend", url:"https://www.java.com/es/" },
    { name: "Spring Boot", category: "Backend", url:"https://spring.io/" },
    { name: "PostgreSQL", category: "Database", url:"https://www.postgresql.org/" },
    { name: "Docker", category: "DevOps", url:"https://www.docker.com/" },
    { name: "Kubernetes", category: "DevOps", url:"https://kubernetes.io/es/" },
    { name: "NestJs", category: "Backend", url:"https://nestjs.com/" },
    { name: "Angular", category: "Frontend", url:"https://angular.io/" },
    { name: "Git", category: "Version Control", url:"https://git-scm.com/" },
    { name: "MySQL", category: "Database", url:"https://www.mysql.com/" },
    { name: "MongoDB", category: "Database", url:"https://www.mongodb.com/" },
    { name: "WordPress", category: "CMS", url:"https://wordpress.org/" },
    { name: "n8n", category: "Automation", url:"https://n8n.io/" },
    { name: "make.com", category: "Automation", url:"https://www.make.com/" },
  ])
}
