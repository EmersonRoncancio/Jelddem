import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trust',
  imports: [],
  templateUrl: './trust.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Trust {
  companies = [
    { name: 'Fundatega', logo: 'https://image.fundatega.org/fundatega%20(1).webp', url: 'https://reforestacion.fundatega.org' },
    { name: 'Metodic Business', logo: 'https://metodicbusiness.com/_image?href=%2F_astro%2FLogotipo+Metodic+Horizontal.DSH2wN-6.svg&w=120&h=45&f=svg', url: 'https://metodicbusiness.com' },
    { name: 'Fundación creando quien tu eres', logo: 'http://creandoquientueres.org/wp-content/uploads/2025/01/Header-Transparente.png', url: 'http://creandoquientueres.org' },
    { name: 'Consuserv', logo: 'https://img.luifereduardoo.com/static-image_logo.webp', url: 'https://consuserv.com' }
  ];

  // Repetir logos para el carrusel infinito
  repeatedCompanies = Array(6).fill(null).flatMap(() => this.companies);
}
