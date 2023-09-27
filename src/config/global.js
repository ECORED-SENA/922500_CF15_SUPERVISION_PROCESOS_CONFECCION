export default {
  global: {
    componenteFormativo: 'Procesos de producción textil (laboratorios)',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves de los procesos textiles, técnicas y prácticas en las prendas de vestir, tinturado, lavandería, desgastes, estampación y bordado, y sus diferentes métodos. Con su estudio responsable, el aprendiz se afianzará en técnicas y habilidades para la aplicabilidad de las mismas en el proceso productivo de la confección de prendas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Procesos textiles',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tintorería y lavandería',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tratamientos previos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Teñido',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Insumos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Procesos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Control de calidad del color',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Desgastes y procesos de acabados en el dénim',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estampación y bordados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estampación textil',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Desarrollo y programación de estampación',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Bordado textil',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Desarrollo y programación de bordados industriales',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Acabados y terminados en los procesos textiles',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/922500-CF15-DU.zip',
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
      tema: 'Procesos textiles',
      referencia:
        'Ecosistema de recursos educativos digitales SENA. (2021). <em>Teoría del color</em>',
      tipo: 'Video',
      link: 'https://youtu.be/rlGfZoeO3Dg',
    },
    {
      tema: 'Tratamientos previos',
      referencia: 'SENA. (2021). <em>Características tratamientos previos</em>',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_1_TratamientosPrevios.pdf',
    },
    {
      tema: 'Tratamientos previos',
      referencia: 'SENA. (2021). <em>Sistemas de secado.</em>',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_2_SistemasDeSecado.pdf',
    },
    {
      tema: 'Tintorería y lavandería',
      referencia: 'SENA. (2021). <em>Colorantes de tintorería.</em>',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_3_ColorantesDeTintoreria.pdf',
    },
    {
      tema: 'Procesos',
      referencia:
        'SENA. (2021). <em>Recetas químicas para tintura de algodón y lana.</em>',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo_4_RecetasQuimicasParaTinturaDeAlgodonYLana.pdf',
    },
    {
      tema: 'Procesos',
      referencia:
        'SENA. (2021). <em>Recetas químicas para tintura del poliéster.</em>',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_5_RecetasQuimicasParaTinturaDePoliester.pdf',
    },
    {
      tema: 'Procesos',
      referencia:
        'SENA. (2021). <em>Recetas químicas para el lavado reductivo.</em>',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_6_RecetasQuimicasParaLavadoReductivo.pdf',
    },
    {
      tema: 'Procesos',
      referencia:
        'SENA. (2021). <em>Recetas químicas para el tinturado de fibras acrílicas.</em>',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo_7_RecetasQuimicasParaTinturadoDeFibrasAcrilicas.pdf',
    },
    {
      tema: 'Acabados y terminados en los procesos textiles',
      referencia: 'SENA. (2021). <em>Técnicas de acabado en seco.</em>',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_8_TecnicasDeAcabadoEnSeco.pdf',
    },
    {
      tema: 'Acabados y terminados en los procesos textiles',
      referencia:
        'Musicprogram. (2017). <em>Procesos de terminación en plantas de producción de jeans SENA</em> [Video]. YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/e9oMRob1wVE',
    },
    {
      tema: 'Estampación y bordados',
      referencia:
        'Alfonso, D. (2014). <em>Procesos de estampados textiles</em>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=U6_eMFI1yS8&ab_channel=DanielaAlfonsoChi%C3%B1as',
    },
    {
      tema: 'Estampación y bordados',
      referencia:
        'Plan Diseño. (2020). <em>Procesos y ventajas de la sublimación. Estampado por transferencia. Sublimación e impresión textil</em> ',
      tipo: 'Video',
      link: 'https://youtu.be/NYnBua_2wUE',
    },
    {
      tema: 'Estampación y bordados',
      referencia: 'SENA. (2021). <em>Materiales para estampación.</em>',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_10_MaterialesParaEstampacion.pdf',
    },
    {
      tema: 'Bordado textil',
      referencia:
        'HogarTV Channel. (2016). <em>Como Se Hace el Bordado Industrial - Hogar Tv por Juan Gonzalo Angel</em>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=sTtJvcRhdDc&ab_channel=HogarTVChannel',
    },
    {
      tema: 'Bordado textil',
      referencia: 'SENA. (2021). <em>Materiales para bordados.</em>',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_11_MaterialesParaBordado.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Adsorción',
      significado:
        'proceso químico en el que la masa de un elemento se dispersa en un líquido.',
    },
    {
      termino: 'Agotamiento',
      significado:
        'proceso de teñido en que se genera una disminución del colorante del baño de tintura para ser transferido, aumentando su concentración en el material textil.',
    },
    {
      termino: 'Barniz',
      significado:
        'solución cuya composición es a base de resinas disueltas en alcohol, trementina y otras sustancias que permiten la extensión sobre una superficie textil, secándose y quedando una capa brillante.',
    },
    {
      termino: 'Capacidad de evaporación',
      significado:
        'proceso químico en el que se determina la cantidad de evaporación que puede alcanzar un líquido.',
    },
    {
      termino: 'Colorante',
      significado:
        'compuesto orgánico que, al agregarse a un sustrato, este último adquiere las cualidades de color conferidas por el primero.',
    },
    {
      termino: 'Disolvente',
      significado:
        'sustancia que ayuda en la dispersión de otra sustancia, por lo general, de consistencia espesa.',
    },
    {
      termino: 'Estampa',
      significado:
        'soporte o base a la que se le ha transferido una imagen a través de diferentes técnicas de estampación.',
    },
    {
      termino: 'Fotómetro',
      significado:
        'instrumento que es usado para medir la intensidad de la luz.',
    },
    {
      termino: 'Foulard',
      significado:
        'técnica de tintorería que se refiere al sistema de escurrido del tejido.',
    },
    {
      termino: 'Homogeneidad',
      significado:
        'capacidad de equilibrar e igualar las características de un elemento.',
    },
    {
      termino: '<em>Offset</em>',
      significado:
        'sistema de impresión en pliegos o de manera rotativa, es uno de los métodos de estampación.',
    },
    {
      termino: '<em>Pick up</em>',
      significado:
        'capacidad de un material textil de recoger un líquido en procesos húmedos.',
    },
    {
      termino: 'Shablones',
      significado:
        'son cuadrados o rectángulos hechos con madera para sostener la muselina sobre la cual se práctica la técnica de estampación por serigrafía.',
    },
    {
      termino: 'Termo fijado',
      significado:
        'proceso empleado en estampación, a través de una máquina al calor, que logra fijar un estampado o seca un diseño de estampado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Casillas, C., González, M. y Salamanca, J. (s. f.). Descrude y blanqueo (madejas de algodón). Química textil',
      link:
        'http://2tm23e6.blogspot.com/p/descrude-y-blanqueo-simultaneo-madejas.html',
    },
    {
      referencia:
        'Ciências e Saúde. (2018). Potencial Hidrogeniônico (pH). Blog de Química.',
      link: 'http://blogdequimica2014.blogspot.com/2018/04/',
    },

    {
      referencia:
        'Cotton Incorporated. (2018). El arte del acabado de prendas de dénim. CottonWorks.',
      link:
        'https://www.cottonworks.com/topics/en-espanol/procesos-de-algodon/el-arte-del-acabado-de-prendas-de-denim/',
    },
    {
      referencia: 'Delgado, J. (2013). Desengomado Enzimático. Prezi.',
      link: 'https://prezi.com/yem8p9g1ljyu/desengomado-enzimatico/',
    },
    {
      referencia:
        'Fashion Snoops. (2021). Fashion Snoops website. Sistema de Bibliotecas SENA.',
      link: 'https://www-fashionsnoops-com.bdigital.sena.edu.co/Default.aspx',
    },
    {
      referencia:
        'Festela Store. (2020). ¿Qué son las tintas textiles? Domestika.',
      link:
        'https://www.domestika.org/es/blog/2853-que-son-las-tintas-textiles',
    },

    {
      referencia:
        'Lafayette Digitex. (s. f.). Estampación textil con sellos, una técnica legendaria y actual.',
      link:
        'https://www.lafayettedigitex.com/estampacion-textil-con-sellos-una-tecnica-legendaria-y-actual/',
    },
    {
      referencia:
        'Lamar, T. (2020). Tecnología Láser Para Acabados: Aplicación en Materiales Textiles. Textiles Panamericanos.',
      link:
        'https://textilespanamericanos.com/textiles-panamericanos/2020/07/tecnologia-laser-para-acabados-aplicacion-en-materiales-textiles/',
    },
    {
      referencia: 'Liter. (2020). O que é o pH?',
      link: 'https://liter.com.br/ph/',
    },
    {
      referencia:
        'Lockuán, F. (2012). La industria textil y su control de calidad. Aspectos preliminares.',
      link:
        'https://issuu.com/fidel_lockuan/docs/i._la_industria_textil_y_su_control_de_calidad',
    },
    {
      referencia: 'MAD Ingenieros. (s. f.). Bordadoras planas | Máquinas.',
      link: 'http://mading.co/bordadoras-planas.html',
    },
    {
      referencia: 'Margom. (2016). Técnicas de estampación textil.',
      link: 'https://www.margom.es/tecnicas-estampacion-textil/',
    },
    {
      referencia:
        'Mejía, F. (2014). Capítulo 6 - Los hilos y la hilatura. Programa de Textilización - Ciencias Textiles.',
      link:
        'https://programadetextilizacion.blogspot.com/2014/12/capitulo-6-maria-de-perinat-1997-2000.html',
    },

    {
      referencia:
        'Ortiz, A. (s. f.). Procesos Textiles. El profe Abdón. Moda y Confección.',
      link: 'https://abortiz.wixsite.com/textiles/procesos-textiles',
    },
    {
      referencia:
        'Pesok, J. (2012). Introducción a la tecnología textil. D – Universidad de la República.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/79774',
    },
    {
      referencia: 'Philadelphia Museum of Art. (s. f.). Woman"s Dolman Wrap',
      link: 'https://www.philamuseum.org/collection/object/104007',
    },
    {
      referencia: 'Probordados.com. (2017). Tipos de máquinas bordadoras.',
      link: 'https://probordados.com/tipos-maquinas-bordadoras/',
    },
    {
      referencia:
        'Puritec de México. (2019). ¿Por qué un suavizador de agua necesita sal?',
      link:
        'https://www.manantialwater.com.mx/blog/porque-suavizador-de-agua-necesita-sal/',
    },
    {
      referencia: 'Rebasando. (s. f.). Estampado en puff.',
      link: 'https://rebasando.com/serigrafia/239-estampado-en-puff',
    },
    {
      referencia:
        'Russell, A. (2013). Principios básicos del diseño textil. Editorial Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'Todo Costura. (s. f.). MAQ. ZIG-ZAG (ELECTRÓNICA) WILLPEX WP20U-A1.',
      link: 'https://www.todocostura.com.py/catalogo/producto/6565 ',
    },
    {
      referencia:
        'Udale, J. (2016). Diseño textil: tejidos y técnicas (2a. ed.). Editorial Gustavo Gili.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/45593',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Regional Antioquia',
        },
        {
          nombre: 'Ledy Johana Velásquez Hernández',
          cargo: 'Experta temática',
          centro: 'Centro Regional Antioquia',
        },
        {
          nombre: 'María Camila Álvarez Trujillo',
          cargo: 'Experta temática',
          centro: 'Centro Regional Antioquia',
        },
        {
          nombre: 'Vilma Perilla Méndez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisión metodológica y pedagógica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanco Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles ',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
