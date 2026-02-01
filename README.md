# OwlSolutions 🦉

Sitio web corporativo de OwlSolutions - Una empresa de desarrollo de software especializada en soluciones digitales innovadoras.

## 🚀 Acerca del Proyecto

OwlSolutions es una plataforma web moderna construida con Angular 21 que muestra los servicios, proyectos y capacidades de la empresa. El sitio incluye:

- **Landing Page Moderna**: Diseño responsivo con animaciones y efectos visuales
- **Secciones Principales**:
  - Hero Section con llamado a la acción
  - Servicios de desarrollo web, móvil y empresarial
  - Portafolio de proyectos exitosos
  - Tecnologías utilizadas
  - Información de la empresa
  - Formulario de contacto
- **Navegación Responsive**: Menú adaptable para desktop y móvil
- **Integración con WhatsApp**: Botones de contacto directo
- **Diseño Modular**: Componentes reutilizables y escalables

## 🛠️ Tecnologías

- **Angular 21.0** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Framework de estilos
- **Angular Material** - Componentes UI
- **Signals API** - Manejo de estado reactivo
- **Vitest** - Testing framework

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm 11.6.2 o superior
- Angular CLI 21.0.5

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd OwlSolutions
```

2. Instala las dependencias:
```bash
npm install
```

## 💻 Desarrollo

Inicia el servidor de desarrollo:

```bash
npm start
# o
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente cuando modifiques los archivos fuente.

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── common/
│   │   └── components/
│   │       └── nabvar/          # Barra de navegación
│   ├── home/
│   │   └── components/
│   │       ├── about/           # Sección "Nosotros"
│   │       ├── cta/             # Call to Action
│   │       ├── Footer/          # Pie de página
│   │       ├── hero/            # Sección principal
│   │       ├── projects/        # Portafolio de proyectos
│   │       ├── services/        # Servicios ofrecidos
│   │       └── technologies/    # Stack tecnológico
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.ts
├── assets/                      # Recursos estáticos
├── main.ts                      # Punto de entrada
└── styles.css                   # Estilos globales
```

## 🏗️ Construcción

Para construir el proyecto para producción:

```bash
npm run build
# o
ng build
```

Los archivos compilados se almacenarán en el directorio `dist/`.

## 🧪 Testing

Ejecutar las pruebas unitarias:

```bash
npm test
# o
ng test
```

## 📝 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run watch` - Construye en modo desarrollo con observación de cambios
- `npm test` - Ejecuta las pruebas unitarias

## 🎨 Características de Diseño

- **Responsive Design**: Adaptado a móviles, tablets y desktop
- **Tema Personalizado**: Paleta de colores morado/púrpura (#purple-950, #purple-900)
- **Animaciones Suaves**: Transiciones y efectos hover
- **Modo Claro/Oscuro**: Variables CSS personalizables
- **Accesibilidad**: Estructura semántica y navegación por teclado

## 📞 Contacto

- **WhatsApp**: +57 300 781 0339
- **Email**: contacto@owlsolutions.com

## 🔗 Enlaces Útiles

- [Documentación de Angular](https://angular.dev)
- [Angular CLI](https://angular.dev/tools/cli)
- [Tailwind CSS](https://tailwindcss.com)

## 📄 Licencia

Este proyecto es privado y pertenece a OwlSolutions.

---

Desarrollado con ❤️ por el equipo de OwlSolutions
