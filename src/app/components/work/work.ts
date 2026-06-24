import { Component } from '@angular/core';

interface Project {
  title: string;
  desc: string;
  tech: string[];
  role: string;
}

interface ClientGroup {
  client: string;
  projects: Project[];
}

interface Engagement {
  vendor: string;
  period: string;
  clients: ClientGroup[];
  expanded: boolean;
}

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.scss'
})
export class Work {
  toggle(e: Engagement): void {
    e.expanded = !e.expanded;
  }

  engagements: Engagement[] = [
    {
      vendor: 'Accenture México',
      period: 'Ago 2022 – Actualidad',
      expanded: false,
      clients: [
        {
          client: 'Coca-Cola FEMSA',
          projects: [
            {
              title: 'Monitor de incidencias',
              desc: 'Dashboard empresarial en Angular 19 para monitorear y administrar incidencias de pagos digitales: seguimiento de transacciones con filtrado avanzado, gestión de usuarios y roles (RBAC), reembolsos masivos y exportación a Excel. SSO empresarial con Azure MSAL, autenticación JWT con auto-refresh y manejo de estado con RxJS.',
              tech: ['Angular 19', 'TypeScript', 'Angular Material', 'SCSS', 'RxJS', 'Azure MSAL', 'JWT'],
              role: 'Frontend Engineer',
            },
            {
              title: 'Integración de pagos · Mercado Pago',
              desc: 'Lideré la integración de la API de Checkout de Mercado Pago: construí un prototipo en Angular y un backend en Node.js, desarrollé el flujo de redirección de pagos y guié al cliente en más de 6 sesiones, habilitándola en Argentina y México. Me consolidé como referente del flujo de pagos del equipo.',
              tech: ['Angular', 'TypeScript', 'Node.js', 'REST API', 'Mercado Pago API'],
              role: 'Frontend Engineer · líder de la integración',
            },
            {
              title: 'Visualización de flujos',
              desc: 'Sistema de visualización de tareas y flujos con diagramas interactivos (GoJS): más de 32 componentes y 12 modales, gráficos dinámicos con Chart.js con interacciones de drill-down, un paginador global reutilizable y un servicio global de exportación a PDF/Excel. Integré ~50 servicios REST.',
              tech: ['Angular', 'TypeScript', 'GoJS', 'Chart.js', 'PrimeNG', 'REST API', 'MSAL'],
              role: 'Frontend Engineer',
            },
            {
              title: 'Sistema de Workflow',
              desc: 'Sistema de formularios y flujos dinámicos: desarrollé 14 formularios dinámicos y más de 30 componentes con filtrado, búsqueda y renderizado de tablas. Entregué 20+ correcciones de bugs y 18+ mejoras en ambientes DEV, QA y producción.',
              tech: ['Angular', 'TypeScript', 'SCSS', 'REST API', 'Jira'],
              role: 'Frontend Engineer',
            },
          ],
        },
        {
          client: 'Santander',
          projects: [
            {
              title: 'App bancaria interna',
              desc: 'Aplicación bancaria entregada en 3 MVPs con Angular, NgRx, SCSS y PrimeNG, cubriendo 95 story points en 6 historias de usuario. Incluye pruebas unitarias con Jasmine, capacitación a usuarios finales y demos de entrega.',
              tech: ['Angular', 'NgRx', 'SCSS', 'PrimeNG', 'Jasmine', 'TypeScript'],
              role: 'Frontend Engineer',
            },
            {
              title: 'Soporte a sistema legacy',
              desc: 'Mantenimiento y refactorización de una aplicación bancaria existente: corrección de bugs con jQuery, CSS, SOAP y Java. Gestión de versiones con SVN; resolví ~18 requerimientos del cliente.',
              tech: ['jQuery', 'CSS', 'SOAP', 'Java', 'SVN'],
              role: 'Frontend Engineer',
            },
          ],
        },
      ],
    },
    {
      vendor: 'IA Interactive',
      period: 'Jul 2021 – Ago 2022',
      expanded: false,
      clients: [
        {
          client: 'Cinépolis',
          projects: [
            {
              title: 'Micrositio Cinépolis',
              desc: 'Micrositio responsivo con login/logout, integraciones de API y componentes dinámicos, compatible en escritorio y móvil en 4–5 secciones funcionales.',
              tech: ['Vue', 'JavaScript', 'Stylus', 'HTML', 'REST API'],
              role: 'Frontend Developer',
            },
            {
              title: 'Cinépolis Klic · Corrección de bugs',
              desc: 'Corrección de bugs en Cinépolis Klic, la aplicación para Smart TVs. Colaboré estrechamente con los equipos de QA y backend para identificar, reproducir y resolver issues, asegurando la calidad de las entregas.',
              tech: ['JavaScript', 'HTML', 'CSS'],
              role: 'Frontend Developer',
            },
          ],
        },
      ],
    },
    {
      vendor: 'Tooring',
      period: 'Ago 2020 – Jul 2021',
      expanded: false,
      clients: [
        {
          client: 'Desarrollo web',
          projects: [
            {
              title: 'Sitios web responsivos & paneles administrativos',
              desc: 'Desarrollé ~5 sitios web responsivos con implementación pixel-perfect a partir de diseños UX/UI. Construí paneles administrativos con Laravel y XAMPP, con foco en consistencia visual y fidelidad al diseño.',
              tech: ['HTML', 'CSS', 'JavaScript', 'Laravel', 'XAMPP'],
              role: 'Frontend Developer',
            },
          ],
        },
        {
          client: 'Prácticas profesionales',
          projects: [
            {
              title: 'Interfaces responsivas & componentes móviles',
              desc: 'Maquetación de interfaces web a partir de especificaciones de diseño, construcción de componentes reutilizables para aplicaciones móviles e implementación de funcionalidades básicas con foco en consistencia visual.',
              tech: ['HTML', 'CSS', 'JavaScript'],
              role: 'Frontend Developer',
            },
          ],
        },
      ],
    },
    {
      vendor: 'Canalla Digital Agency',
      period: 'Jun 2019 – Sep 2019',
      expanded: false,
      clients: [
        {
          client: 'Desarrollo web',
          projects: [
            {
              title: 'Sitios web & componentes responsivos',
              desc: 'Primera experiencia profesional. Desarrollo de layouts a partir de especificaciones de diseño, implementación responsiva en múltiples dispositivos. Soporte en el desarrollo de 3 sitios funcionales con alta fidelidad al diseño (pixel-perfect).',
              tech: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Adobe XD'],
              role: 'Frontend Developer',
            },
          ],
        },
      ],
    },
  ];
}
