import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FooterLinks } from './types/footer.types';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './Footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  footerLinks = signal<FooterLinks>({
    servicios: [
      { name: 'Desarrollo Web', href: '#' },
      { name: 'Apps Móviles', href: '#' },
      { name: 'Sistemas Empresariales', href: '#' },
      { name: 'Consultoría', href: '#' },
    ],
    proceso: [
      { name: 'Consulta Inicial', href: '#proceso-consulta' },
      { name: 'Estrategia y Diseño', href: '#proceso-estrategia' },
      { name: 'Desarrollo Ágil', href: '#proceso-desarrollo' },
      { name: 'Entrega y Soporte', href: '#proceso-entrega' },
    ],
    contacto: [
      { name: 'WhatsApp', href: 'https://wa.me/573007810339' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/siwina/about/' },
      { name: 'Sección Contacto', href: '#contacto' },
    ],
  });
}
