export default {
  global: {
    componenteFormativo: 'Técnicas de exhibición de mercancía',
    descripcionCurso:
      'La exhibición de la mercancía es una estrategia comercial que permite a las empresas mejorar sus ventas, este proceso cuenta con diferentes técnicas para que el empresario pueda elegir la que más le convenga según las necesidades de su negocio. En este componente formativo reconocerá dichas técnicas y las características de cada una de ellas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Distribución comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: ' Intermediarios y tipos de intermediarios',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Canales de distribución',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Logística comercial',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Formatos comerciales, tipología',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Exhibición de mercancía',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Material POP, tipología, manejo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Mobiliario, funcionalidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Plan promocional, actividades y materiales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo:
          'Normativa ambiental, tipos de residuos y procedimientos de manejo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.3. Logística comercial',
      referencia:
        'Cervantes, V. [Betsabé Cervantes].(2017, 12 de febrero). Canales de distribución y logística. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Y9FGiUS1oik',
    },
    {
      tema: '3. Exhibición de mercancía',
      referencia:
        'Stran, U. (2001.) Reglas básicas para exhibir mercancías. Oficina Internacional del Trabajo, Ginebra.',
      tipo: 'Documento',
      descarga: '/downloads/reglas.pdf',
    },
    {
      tema: '6. Plan promocional, actividades y materiales',
      referencia:
        'Bello, L. & Mangones, Y. (2020). Guía práctica para la elaboración de un plan de marketing. Bogotá: Ediciones Universidad Cooperativa de Colombia.',
      tipo: 'Documento',
      link: 'https://doi.org/10.16925/gcgp.22',
    },
    {
      tema:
        '7. Normativa ambiental, tipos de residuos y procedimientos de manejo',
      referencia:
        'Universidad Pontifica Bolivariana (2008). Guía para el manejo integral de residuos. Universidad Pontificia Bolivariana. ISBN: 978-958-44-3071-7 Primera Edición. Medellín, Colombia.',
      tipo: 'Documento',
      descarga: '/downloads/guia_manejo_residuos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Comercialización',
      significado:
        'Poner en venta un producto o servicio con el fin de satisfacer la necesidad del cliente.',
    },
    {
      termino: 'Consumo',
      significado:
        'Acción de consumir o gastar un producto o servicio para atender diversas necesidades. ',
    },
    {
      termino: 'Cronológica',
      significado:
        'Tiempo que transcurre de un momento a otro, es la cantidad de días, meses, años, etc.',
    },
    {
      termino: 'Distribución comercial',
      significado:
        'Proceso de planificación comercial y de marketing del productor para llevar los productos a los diferentes consumidores.',
    },
    {
      termino: 'Distribuidoras',
      significado:
        'Empresas que compran productos y los comercializan a otras para obtener ganancias.',
    },
    {
      termino: 'Exhibición',
      significado: 'Muestra o exposición al público de un producto o servicio.',
    },
    {
      termino: 'Logística',
      significado:
        'Acción de consumir o gastar un producto o servicio para atender diversas necesidades. ',
    },
    {
      termino: 'Consumo',
      significado:
        'Medios, métodos e infraestructura para garantizar el almacenamiento, transporte y entrega de productos o servicios.',
    },
    {
      termino: 'Materia prima',
      significado:
        'Materia extraída de otros materiales para la transformación y elaboración de productos de consumo.',
    },
    {
      termino: 'Mercadotecnia',
      significado:
        'Conjunto de actividades que se llevan a cabo con el fin de aumentar la demanda en el comercio',
    },
    {
      termino: 'Producción',
      significado:
        'Actividad que aporta valor agregado por la elaboración y suministro de productos y servicios.',
    },
    {
      termino: 'Producto terminado',
      significado:
        'Bien que surge mediante el proceso de fabricación para la venta en el sector comercial, con el fin de satisfacer necesidades del consumidor',
    },
    {
      termino: 'Separación geográfica',
      significado:
        'División del mercado teniendo en cuenta las diferencias geográficas que hay de un lugar a otro, ayuda a recopilar y analizar información de la ubicación',
    },
  ],
  referencias: [
    {
      referencia: 'Alana, F (2021) . <em>¿Qué es el Material POP?</em>.',
      link: 'https://deepbluepop.com/material-pop/que-es-el-material-pop/',
    },
    {
      referencia:
        'Borja, R. (2021). <em>Merchadinsing. Teoría, práctica y estrategia</em>.  Tercera edición. Madrid: Esic Editorial.',
    },
    {
      referencia:
        'Cortés, G. (2017). <em>7 Tipos de exhibición en punto de venta</em>.',
      link: 'https://www.informabtl.com/7-tipos-exhibicion-en-punto-venta/',
    },
    {
      referencia:
        'Cruz, I. (1991). <em>Fundamentos de Marketing</em>, Editorial Ariel, Barcelona.',
    },
    {
      referencia:
        'Economipedia. (2020). <em>Canales de distribución comercial</em>.',
      link:
        'https://economipedia.com/definiciones/canales-de-distribucion.html',
    },
    {
      referencia:
        'ILERNA.  (2019). <em>Los intermediarios en la distribución comercial</em>.',
      link:
        'https://www.ilerna.es/blog/fp-online/intermediarios-en-la-distribucion-comercial/',
    },
    {
      referencia:
        'Martínez, I. (2015). <em>¿Qué es y cómo se realiza un plan promocional?</em>.',
      link:
        'https://blog.comunicae.es/que-es-y-como-se-realiza-un-plan-promocional/',
    },
    {
      referencia:
        'Santesmases, M. (1999). <em>Marketing. Conceptos y Estrategias</em>, 4ª edición, Ediciones Pirámide, Madrid',
    },
    {
      referencia:
        'Vázquez, R., Trespalacios, J. (1997). <em>Distribución Comercial</em>. Estrategias de Fabricantes y Detallistas, Editorial Cívitas, Madrid.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Esperanza Cardona Grisales',
        cargo: 'Experta Temática',
        centro: 'Centro de Comercio y Servicios Regional - Cauca',
      },
      {
        nombre: 'Jeimy Lorena Romero Perilla',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios Regional - Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología Regional - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Ándres Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
