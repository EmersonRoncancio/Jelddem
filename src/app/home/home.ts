import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Services } from "./components/services/services";
import { Projects } from "./components/projects/projects";
import { About } from "./components/about/about";
import { Trust } from "./components/trust/trust";
import { Cta } from "./components/cta/cta";
import { Footer } from "./components/Footer/Footer";
import { WhatsApp } from "./components/whatsapp/whatsapp";

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Projects, About, Trust, Cta, Footer, WhatsApp],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home { }
