<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tintorería y lavandería
    .bg__1.mn.p-5(data-aos="zoom-in")
      .fondo-textil.p-5.mb-5
        .row.justify-content-center
          .col-lg-10
            .tarjeta.bg-white.p-4.m-5
              p.mb-0 Desde tiempos milenarios, en la moda se ha evidenciado el uso del color como un elemento cultural clave para identificar diversos modos de vivir, representados a través de la vestimenta.
      p.mb-5(data-aos='fade-right') El siguiente video, expone aspectos y elementos que facilitan una comprensión más amplia de los procesos de tintorería y lavandería y su importancia en la vida de las sociedades. Obsérvelo con atención:
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/dF9-P2F36Do?si=wZI3Bxz2bPR_0yUv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.mt-2 Video. Tintorería y lavandería, el color en las prendas y las culturas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Se define tintorería al #[span.color-primario.fw-bold “conjunto de procesos químicos que permiten al sustrato, adquirir un color, de acuerdo con el requerimiento final”] (p. 3). Estas acciones encaminadas a darle color a una materia prima en crudo se generaron a través de diferentes técnicas rudimentarias, haciendo uso de tintes naturales que, a su vez, se convirtieron en colorantes sintéticos al desarrollarse la química. Asimismo, la lavandería es un proceso inherente a la tintorería, por el uso de diversas técnicas en la que se encuentra presente.  
      .col-lg-4.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/2.png', alt='')
    p.mb-5(data-aos='fade-right') De esta manera, se han definido cuatro elementos fundamentales para llevar a cabo el proceso de tintorería:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1 
          span Elementos clave para el proceso de tintorería
        .tabla-a.color-acento-botones.mb-5
          table
            tbody(style="border: 2px solid #FF6E33")
              tr
                td.fw-bold.text-center(style="background-color: #FFAD8B; width: 30% ")  Sustrato

                td(style="background-color: #FEE7DD ") Se define como la materia prima que será teñida, la cual se puede presentar como fibras, hilos, tejidos, entre otros. Dependiendo de sus particularidades, se puede evidenciar un teñido exitoso, es decir, su estructura química, grado de blancura, intensidad de torsión, factor de cobertura, etc.
              tr
                td.fw-bold.text-center(style="background-color: #FFAD8B; width: 30% ") Insumos 
                td.bg-white Se refiere a los colorantes o blanqueadores ópticos. Estos elementos, ya sean químicos o naturales, son los que actúan directamente en el proceso de tintorería para realizar la impresión de color.
              tr
                td.fw-bold.text-center(style="background-color: #FFAD8B; width: 30% ") Maquinaria 
                td(style="background-color: #FEE7DD ") La tecnología en maquinaria utilizada para llevar a cabo los procesos de tintorería es indispensable para lograr los resultados esperados. Según el tipo de sistema de trabajo, se determina si se desarrollará a través de un sistema continuo, discontinuo o semicontinuo. 
              tr
                td.fw-bold.text-center(style="background-color: #FFAD8B; width: 30% ") Factor humano
                td.bg-white El control y desarrollo del proceso de tintorería define el factor humano como el elemento más importante, puesto que está en capacidad de realizar directamente acciones operativas, medias o directivas, en función del resultado esperado. 
    #t_2_1.titulo-segundo.color-extra(data-aos='fade-right')
      h2 2.1 Tratamientos previos
    p.mb-5(data-aos='fade-right') Los tratamientos previos al proceso de tintorería suponen la preparación de la materia prima para ser intervenida. Esto, según una serie de variables y la necesidad con la cual será fabricado el producto textil para ofrecerlo al cliente final; así es como se establecen los métodos a utilizarse.
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/3.png', alt='')
      .col-lg-8
        p Dentro de una gran variedad de tratamientos previos, se destacan los siguientes:
        ul.lista-ul--color.ms-4
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Gaseado o chamuscado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Termo fijado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Desengomado o desencolado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Descrudado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Blanqueo
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Mercerizado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Antipilling
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Carbonizado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Decorticado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Lavado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Hidroextracción
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Apertura de géneros de punto tubulares
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/adjunto.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Tratamientos Previos
                  p.mb-0.text-small Amplie información sobre cada tratamiento previo del textil, en el proceso de teñido, leyendo con suma atención el Anexo_1_TratamientosPrevios.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_1_TratamientosPrevios.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="zoom-in")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.order-2
          img(src='@/assets/curso/temas/tema2/4.png', alt='')
        .col-lg-9.order-1
          .bloque-texto-a__texto.p-4
            p Además de los distintos tratamientos previos mencionados, se resalta el secado, es un elemento muy importante en el proceso textil. Ya sea en la preparación o la aplicación del tinte en un material, es necesario realizar un secado posterior. Dependiendo de las características de las fibras, la tela absorberá grandes o pequeñas cantidades de agua, de esta forma, el líquido que se encuentra en la superficie se puede eliminar mecánicamente.
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img.d-lg-block.d-none(src='@/assets/curso/temas/tema2/5.png', alt='')
      .col-lg-9(data-aos="fade-left")
        p Por otro lado, para el agua que se encuentra en las fibras hinchadas, se debe llevar a cabo un proceso de secado, #[span.color-acento-contenido que por lo general se realiza utilizando aire caliente, con el fin de evaporar el agua alojada en el material.]
        .tarjeta-clip.p-4(style="background-color: #fee7dd ").mb-4
          img(src='@/assets/curso/temas/tema2/6.svg', alt='' style="width: 79px").me-4
          p Para elegir la técnica de secado más adecuada, se deben tener en cuenta diversos factores que atiendan a las distintas necesidades, como los costos, capacidad de evaporación, agua y energía requerida, etc. Además, el tejido solo debe estar en la unidad de secado el tiempo justo para eliminar la humedad. 
        p De esta manera, se identifican los siguientes sistemas de secado:
        ul.lista-ul--color.ms-4
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Secado por convección de calor.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Secado por contacto con superficies metálicas calientes.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Secado por radiación infrarroja.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Secado por microondas u ondas de alta frecuencia.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Secado por combustión.
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/adjunto.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Sistemas de secado 
                  p.mb-0.text-small Detalle cada uno de los sistemas de secado, estudiando el Anexo_2_SistemasDeSecado. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_2_SistemasDeSecado.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
    Separador
    #t_2_2.titulo-segundo.color-extra(data-aos='fade-right')
      h2 2.2  Teñido
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p El proceso de teñido se basa en la capacidad que tiene un tejido para retener los colorantes que se aplican mediante distintos métodos. El proceso de teñido textil se realiza en sustratos como: fibras, hilos, telas y prendas, a través de diferentes fases; de esta forma, dependiendo del mismo sustrato y de la etapa del proceso textil en que se aplique el teñido, es como se puede evidenciar la técnica más adecuada para alcanzar el nivel de absorción del color óptimo.
          br
          br
          | Este se realiza de tres maneras:
      .col-lg-5.col-8(data-aos="fade-left"): img.d-lg-block.d-none(src='@/assets/curso/temas/tema2/7.png', alt='')
    .bg-middle.p-5.pb-0.mb-5(data-aos="zoom-in")
      .contenido
        .row.justify-content-center
          .col-lg-3.mb-lg-0.mb-4.col-6
            img(src='@/assets/curso/temas/tema2/8.svg', alt='' )
          .col-lg-9
            .row.justify-content-center.mb-3
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Adsorción física
                  p Esta sucede cuando el colorante se adhiere con fuerza al textil, lo que le permite resistir a posteriores procesos de lavado. 
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Adsorción mecánica
                  p Se basa en la integración de materiales y pigmentos insolubles en la fibra.
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Reacción en fibra
                  p Se refiere al proceso en el que los iones y moléculas del colorante, al introducirse en las fibras, se conectan gracias a enlaces químicos covalentes.
            p La calidad de un buen teñido está sujeta a diversas condiciones, que se pueden observar al realizar el proceso o en pruebas posteriores. Es de tener en cuenta que, según el material a trabajar, se determinará la máquina que denote una protección del sustrato, genere repetitividad de los resultados y establezca un costo adecuado del proceso. 
    p.text-center Para realizar el proceso de teñido se han especificado dos métodos estándar, como se muestra en la siguiente tabla:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2
          span  Métodos estándar del proceso de teñido
        .tabla-a.color-acento-botones.mb-5
          table
            thead(style="border-top: 0px")
              tr(style='background-color: #FF6E33')
                th(style='width: 20%') Método
                th Definición
                th Ilustración
            tbody
              tr
                td.text-center(style='width: 20%') Tintura por agotamiento / Sistema discontinuo
                td Se disuelve el colorante en un baño de agua, se sumerge el material y se retira una vez se evidencia la impregnación homogénea del tinte en la fibra. Después, se procede a lavar para eliminar los residuos. Al finalizar, se continúa con el secado.
                  br
                  br
                  |En este sistema, se establece que las moléculas del colorante pasan por etapas de difusión, adsorción y fijación.
                td 
                  img(src='@/assets/curso/temas/tema2/10.svg', alt='')
              tr
                td.text-center(style='width: 20%') #[em Fourlard]ado / Sistema continuo o semicontinuo
                td En este proceso, se utilizan medios mecánicos que permiten agregar el tinte sobre la tela homogéneamente, lo cual hace que todo el textil se impregne. Una vez que ha penetrado el color en todo el material, se puede determinar que ya quedó fijado. Para concluir, se procede a lavar.
                td
                  img(src='@/assets/curso/temas/tema2/11.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/12.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Las operaciones que se llevan a cabo en los dos sistemas son: 
        ul.lista-ul--color.ms-4
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Agregar el colorante en el agua.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Lograr homogeneidad del tinte al penetrar en la fibra.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Fijar el colorante.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Concluir con el lavado del textil.
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Teñido por sistema discontinuo y semicontinuo
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p Este sistema se explica desde la teoría del por agotamiento, la cual se enfoca en la reacción química que se genera entre el material textil y el colorante que se agrega, donde se tiene en cuenta la velocidad del proceso y el balance de este.  
          br
          br
          | Para ello, se ha determinado la siguiente fórmula:
        .row.justify-content-center.mb-5
          .col-5: img(src='@/assets/curso/temas/tema2/15.svg', alt='')
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/13.png', alt='')
    p.mb-5(data-aos='fade-right') Como es entendible, la química juega un papel fundamental en el proceso de teñido; para conocer el proceso en que una fibra es impregnada por el colorante, se han establecido cuatro etapas que explican este sistema:
    .tarjeta.bg-card.p-5.mb-4(data-aos="zoom-in")
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Primera fase")
          .col-md-9.mb-4.mb-md-0
            h5
              span.color-acento-contenido Disolución y dispersión del colorante 
            p En esta etapa, se define si los colorantes son solubles o dispersables en agua y se pueden presentar de forma micelar o en estructura de micropolvo.
          .col-md-2.col-6: img(src='@/assets/curso/temas/tema2/16.svg', alt='')
        .row(titulo="Segunda fase")
          .col-md-9.mb-4.mb-md-0
            h5
              span.color-acento-contenido Adsorción 

            p En esta etapa, el colorante se integra en la fibra por el proceso de adsorción, además, factores como la temperatura, el pH y la afinidad determinan el equilibrio de las reacciones.
          .col-md-2.col-6: img(src='@/assets/curso/temas/tema2/17.svg', alt='')
        .row(titulo="Tercera fase")
          .col-md-9.mb-4.mb-md-0
            h5
              span.color-acento-contenido Difusión 
            p Esta es la etapa más lenta del proceso, donde el colorante es adsorbido por la superficie del material textil, al impregnarse a través de sus fibras para distribuirse de forma homogénea y, posteriormente, fijarse. De esta manera, se determina la calidad del teñido; para ello, se debe tener en cuenta la cristalinidad de la fibra, el tamaño molecular del colorante, la fuerza de la afinidad entre el colorante y la fibra, además de la temperatura de teñido.
          .col-md-2.col-6: img(src='@/assets/curso/temas/tema2/18.svg', alt='')
        .row(titulo="Cuarta fase")
          .col-md-9.mb-4.mb-md-0
            h5
              span.color-acento-contenido Migración 
            p En esta última fase, se invierte el proceso, al fundirse el colorante en las capas externas de la fibra y luego migrar hacia las áreas donde hay una menor concentración, lo que permite igualar el color en el material.
          .col-md-2.col-6: img(src='@/assets/curso/temas/tema2/19.svg', alt='')
    p.mb-5(data-aos='fade-right') Al observar las diferencias entre los dos sistemas de teñido, se evidencia que comparten similitudes en varias operaciones.  Asimismo, existen diversos elementos que se deben tener en cuenta, ya sea en el sistema discontinuo o semicontinuo.
      br
      br
      |Tales elementos son:
    h3(data-aos="fade-right")
      span.color-acento-contenido Cantidad de productos por añadir
    p.mb-5(data-aos='fade-right') Para entender cuál es la cantidad exacta de producto que se debe agregar al textil para un proceso óptimo de teñido. Por ello, las recetas de tintorería están determinadas por:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.p-4(style="background-color: #F5E6E9").h-100
          p #[b a. Volumen de baño:] concentración en gramos del producto por cada kilo. Su fórmula es: 
            br
            br

            | #[span.color-acento-contenido.fst-italic 𝑃𝑒𝑠𝑜 𝑝𝑟𝑜𝑑𝑢𝑐𝑡𝑜 (𝑔)] #[span.color-acento-contenido.fw-bold = Concentración del producto (g/l) . Volumen del baño (l)]
            br
            br
            |#[b Donde:] 
            br
            |#[b (g/l):] gramos del producto por cada litro de baño 
            br
            |#[b (l):] Litro de baño
          
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.p-4(style="background-color: #F5E6E9").h-100
          p #[b b. Peso del material:] determina cuántas unidades de peso del producto se necesitan por 100 unidades de peso del sustrato. La fórmula es: 
          img(src='@/assets/curso/temas/tema2/20.svg', alt='')
          p #[b Donde:]
            br
            |% spm: valor porcentual sobre el peso del material

          
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/21.png', alt='')
    h3(data-aos="fade-right")
      span.color-acento-contenido Relación de baño (R/B)
    p.mb-5(data-aos='fade-right') Se refiere a la cantidad de baño utilizado para teñir una cantidad definida del material textil. De esta manera, se entiende que, si en una receta hay mayor relación de baño, se requiere más agua blanda, energía y con ello se incrementa el peso de los productos y la cantidad de efluentes. 
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/22.png', alt='')
      .col-lg-6(data-aos="fade-left")
        .tarjeta.p-3(style="background-color: #F5E6E9").h-100
          p.mb-0 #[b Ejemplo:] 
            br
            br
            |Si se carga la máquina con tela seca y se tienen los siguientes datos: 300 kg es el peso de tela y el R/B: 1:10. 
            br
            br
            |El volumen final será: 
            br
            br
            | #[span.color-acento-contenido.fw-bold.fst-italic 300 kg x 10 l/kg = 3000 l]
    h3(data-aos="fade-right")
      span.color-acento-contenido Tiempo de rotación
    p Se refiere al tiempo que una cuerda demora en dar la vuelta dentro de una máquina. De esta forma, al determinar la velocidad en que se mueve la cuerda, es posible conocer cuánto tiempo tarda la tela en rotar. 
      br
      br
      |La velocidad del torniquete y la velocidad de la cuerda deben ser muy similares, para asegurar que no se generen tensiones sobre el sustrato.
    .row.justify-content-center.mb-5
      .col-6: img(src='@/assets/curso/temas/tema2/23.svg', alt='')
    p Como dato adicional, es bueno indicar que la longitud de la cuerda puede calcularse fácilmente si conocemos el rendimiento del tejido y el peso de la tela. 
        br
        br
        |#[span.color-acento-contenido.fw-bold.fst-italic Longitud de la cuerda m = Rendimiento (m kg) . Peso (kg)]
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .tarjeta.p-5(style="background-color: #F5E6E9").h-100
          .row.justify-content-center
            .col-lg-8.mb-lg-0.mb-3
              p.mb-4 #[b Ejemplo]
                br
                br
                |Hay una tela con un rendimiento de 3,92 y un peso de 88 kilogramos; con estos datos, se debe determinar la longitud de la cuerda. 
                br
                br
                |#[span.color-acento-contenido.fst-italic.fw-bold.text-center Longitud de la cuerda m = 3,92 m kg . 88 kg = 344,96 m ≅ 345 metros. ]
                br
                br
                |Siguiendo con el ejemplo, se sabe que la longitud de la cuerda es de 345 metros y esta se tarda en dar una vuelta 1,267 minutos; con estos datos, se debe determinar la velocidad de la cuerda.
              img(src='@/assets/curso/temas/tema2/25.svg', alt='' style="width: 382px").m-auto
            .col-lg-4.col-6: img(src='@/assets/curso/temas/tema2/24.png', alt='')
    h3(data-aos="fade-right")
      span.color-acento-contenido Curva temperatura tiempo
    p.mb-5(data-aos='fade-right') Se define como las instrucciones precisas con la temperatura establecida y las unidades de tiempo exactas para lograr el proceso con éxito. Esta práctica sugiere rigurosidad en cuanto a las instrucciones de tintorería en cuanto a las unidades de tiempo y temperatura determinadas, donde se define el punto inicial y la velocidad de subida de temperatura.
    p.text-center.fw-bold A continuación, se presentan las instrucciones para teñir un textil:
    .bg-middle.p-5.pb-0.mb-5(data-aos="zoom-in")
      .contenido
        .row.justify-content-center
          .col-lg-3.mb-lg-0.mb-4.col-6
            img.d-lg-block.d-none(src='@/assets/curso/temas/tema2/26.png', alt='' )
          .col-lg-9
            .row.justify-content-center.mb-5
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Teñido
                  ul.lista-ul--color
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | El sustrato con agua a 40 ºC #[br] Añadir productos auxiliares, circular el baño durante 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Añadir los colorantes, circular por 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Subir a 80 ºC a 1,3 ºC/min
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Mantener por 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Añadir 1/3 de la sal
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Mantener por 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      |  Añadir 1/3 de la sal
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Mantener por 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Añadir 1/3 de la sal
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Mantener por 30 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Añadir el álcali
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      |  Mantener por 60 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Bajar a 60 ºC a 2 ºC/min
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      |  Botar baño
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Enjuague y neutralizado
                  ul.lista-ul--color
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      |  Enjuagar en frío por 10 minutos a rebose
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Botar baño
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Cargar agua
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Añadir ácido débil
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Circular por 20 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      |  Botar baño
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Enjuagar
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Botar baño
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Jabonado
                  ul.lista-ul--color
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Cargar agua
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Añadir jabón
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Llevar a ebullición a 8 ºC/min
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Mantener por 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Botar baño
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      | Enjuagar en frío por 10 minutos
    .titulo-icono.mb-4(data-aos="fade-right")
      .titulo-icono__texto: h4.text-white.mb-0 Teñido por sistema continuo
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p Por otro lado, en el teñido por sistema continuo, además del volumen de baño establecido anteriormente en el sistema discontinuo, se tiene en cuenta el porcentaje de retención (#[em Pick up]) de un tejido. Esto hace referencia al peso que es capaz de retener el textil al ser impregnado por el tinte y pasado por el #[em Fourlard].
          br
          br
          | Además, el #[em pick up] está inversamente relacionado con la presión de exprimido en los rollos del #[em Fourlard], es decir, el #[em pick up] disminuye a mayor presión de exprimido y aumenta a menor presión de exprimido. 
          br               
          br
          | La siguiente tabla detalla algunas fórmulas aplicables al teñido por sistema continuo:
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema2/27.png', alt='')  
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3 
          span Fórmulas aplicables al teñido por sistema continuo
        .tabla-a.color-acento-botones.mb-5
          table
            thead(style="border-top: 0px")
              tr(style='background-color: #FF6E33')
                th Método
                th Definición
                th Ilustración
            tbody
              tr
                td.text-center.fw-bold Para determinar el volumen de baño en litros requerido en el teñido de un tejido.
                td: img(src='@/assets/curso/temas/tema2/28.svg', alt='')      
                td 
                  p Hay un material textil que pesa 717,5 y tiene un #[em pick up] del 72 %. De esta manera, se debe calcular el volumen del baño. 
                    br
                    br
                    |Aplicando la fórmula se obtiene que:    
                  img(src='@/assets/curso/temas/tema2/30.svg', alt='')         
              tr    
                td.text-center.fw-bold Para determinar el #[em pick up] de un tejido.
                td: img(src='@/assets/curso/temas/tema2/29.svg', alt='')      
                td 
                  p Por otro lado, se espera determinar el porcentaje de retención de un tejido con peso seco de 180 g y un peso húmedo de 297 g.          
                  img(src='@/assets/curso/temas/tema2/31.svg', alt='' style="width: 250px").m-auto
    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3  Insumos
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/32.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p Para iniciar con el proceso de tintorería, es necesario conocer los insumos aptos para dicha ejecución. En este apartado, se realiza la descripción y reconocimiento de las propiedades de cada uno de ellos. Como punto de partida, se inicia con el insumo más utilizado en este rubro, el H2O, más conocido como agua, entendiendo su gran importancia y profundizando en diferentes tipos de dureza, según variantes en disoluciones; continuando con la explicación de productos químicos, auxiliares, colorantes, enzimas y blanqueadores óptimos. 
          br  
          br
          | Por consiguiente, se obtiene la información y recursos precisos para llevar a cabo procesos de tinturado y lavandería en la industria de la moda.
    .mn.p-5(style="background-color: #fee7dd " data-aos="fade-right").mb-5
      .titulo-icono.mb-4
        .titulo-icono__texto: h4.text-white.mb-0 El agua
      .row.justify-content-center.mb-5
        .col-lg-8.mb-lg-0.mb-3
          p El agua es conocida, en el sector de tintoreros, como el disolvente universal, ya que es el insumo más utilizado en el proceso del color, comparado con los demás; por ende, su calidad y la cantidad a utilizar son analizadas de manera concisa y detallada, para disolver una gran variedad de otras sustancias en la receta de colorimetría. El agua cumple con diferentes roles, actuando como medio de transporte mecánico, de transferencia de calor, intercambio químico y como mecanismo disolutor.
            br
            br
            | A continuación, se analizan diferentes conceptos que son de suma importancia para emplear el H2O como disolvente.
        .col-lg-4.col-8: img(src='@/assets/curso/temas/tema2/33.png', alt='')
      .row.justify-content-center.mb-4
        .col-lg-9(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 4
            span Conceptos generales del agua
          .tabla-a.color-acento-botones
            table
              caption Nota: tomado de Lockuán (2012). 
              thead(style="border-top: 0px")
                tr(style='background-color: #FF6E33')
                  th(style='width: 20%') Concepto
                  th Descripción
              tbody.bg-white
                tr
                  td.text-center(style='width: 20%') Dureza del agua
                  td Es la concentración de compuestos minerales de cationes alcalinotérreos (grupo 2) en una muestra específica de agua (particularmente, magnesio y calcio). Su fórmula es:
                    br
                    br

                    |(mg/l de CaCO3) = 2,50 [Ca++] + 4,16 [Mg++]
                tr
                  td.text-center(style='width: 20%') Tipos de dureza
                  td
                    p #[b Dureza temporal:] también conocida como dureza de carbonatos, ya que se produce a partir de hidrógeno carbonatos, más conocidos como bicarbonatos.
                      br
                      br
                      |#[b Dureza permanente:] está se da por la presencia de sulfatos y/o cloruros de calcio y de magnesio en el agua. Se debe tener presente que son mucho más solubles estas sales.
                tr
                  td.text-center(style='width: 20%') Medidas de la dureza del agua
                  td -	mg CaCO3/l o ppm de CaCO3

                    br
                    br
                    |Miligramos de carbonato de calcio (CaCO3) en un litro de agua; esto es equivalente a ppm de CaCO3.
                    br
                    |-	Grado alemán (Deutsche Härte, ° dH)

                    br
                    br
                    |Equivale a 17,9 mg CaCO3/l de agua.
                tr
                  td.text-center(style='width: 20%') Eliminación de la dureza
                  td Son procesos donde se realiza un ablandamiento de aguas. Existen diferentes maneras:
                    br
                    br
                    |-	Utilizando el carbonato de sodio (o de potasio) y cal. 
                    br
                    br
                    |-	La descalcificación mediante resinas (zeolitas) de intercambio iónico. 
                tr
                  td.text-center(style='width: 20%') Agua dura
                  td Es utilizada en procesos que no requieren mucha sutileza en procesos de tintorería. Cabe resaltar que algunos casos de teñido también son usados. 
      .row.justify-content-center.mb-4
        .col-lg-9(data-aos="zoom-in")
          .tarjeta-clip.p-4(style="background-color: #d9fbfc ").mb-4
            img(src='@/assets/curso/temas/tema2/34.svg', alt='' style="width: 79px").me-4
            p #[span.h4.color-acento-contenido ¡Clasificación de dureza del agua!]
              br
              br
              |En cada industria, la dureza del agua se considera óptima dependiendo de su rubro. En la industria textil, específicamente, cuando se refiera a tintorería, se considera una dureza máxima en 6 grados alemanes, pero es preferible una leve dureza con un valor límite de 3 grados alemanes.
      p A continuación, se muestra un cuadro general con la clasificación de dureza del agua:
      .row.justify-content-center.mb-5
        .col-lg-10.mb-3(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 5 
            span  Clasificación de dureza
          .tabla-a.color-acento-botones
              table
                caption Nota: tomado de Lockuán (2012). 
                tbody.bg-white.text-center(style="border: 2px solid #FF6E33 ")
                  tr
                    td Tipos de agua
                    td ppm CaCO3
                    td º dH

                  tr
                    td Blanda
                    td ≤17
                    td ≤0,95
                  tr
                    td Levemente dura
                    td ≤60
                    td ≤3,35
                  tr
                    td Moderadamente dura
                    td ≤120
                    td ≤6,70
                  tr
                    td Dura
                    td ≤180
                    td ≤10,05
                  tr
                    td Muy dura
                    td >180
                    td >10,05
        .col-lg-10(data-aos="zoom-in")
          .tarjeta.fondo-card.p-5(style="background-color: #effefe ") 
            h4
              span.color-acento-contenido ¿Qué sucede cuando el agua es dura?
            ul.lista-ul--color
              li.d-flex.mb-1
                i.fas.fa-tshirt(style='color: #FF6E33')
                | Precipita los colorantes ácidos y básicos.
              li.d-flex.mb-1
                i.fas.fa-tshirt(style='color: #FF6E33')
                | Les resta las propiedades de detergente a los jabones. 
              li.d-flex.mb-1
                i.fas.fa-tshirt(style='color: #FF6E33')
                | En calderas, calentadores y lavadoras, en sus tuberías, puede generar incrustaciones de carbonatos. 
              li.d-flex.mb-1
                i.fas.fa-tshirt(style='color: #FF6E33')
                | En las tuberías, puede provocar obstrucciones, que se pueden retirar con ácidos débiles, tales como el acético, cítrico, entre otros.
    .titulo-icono.mb-4(data-aos="fade-right")
        .titulo-icono__texto: h4.text-white.mb-0 Productos químicos
    p.fw-bold(data-aos="fade-right") Los productos químicos se dividen en cuatro grupos. Según el tipo de compuesto, estos grupos son: 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img.d-lg-block.d-none(src='@/assets/curso/temas/tema2/35.png', alt='' style="width: 100%")
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--red")
          div(titulo="Los ácidos")
            p Los ácidos, en el momento que se disuelven en agua, la solución obtenida alcanza un pH menor que 7, debido a que se ha producido una actividad de catión hidronio más alta que el agua pura. Entre los ácidos más fuertes, se tiene el sulfúrico, el clorhídrico y el nítrico, y como los ácidos más débiles, el acético, fórmico y oxálico.
          div(titulo="Los álcalis")
            p Los álcalis son óxidos, hidróxidos y carbonatos de metales alcalinos. Se debe tener presente que jamás se pueden mezclar con los ácidos, ya que son opuestos. Entre los más fuertes, se encuentra el hidróxido de sodio (soda cáustica) y entre los débiles, el carbonato de sodio y el amoníaco. Este grupo de álcalis se aplican en muestras, según recetas ya determinadas, para realizar descrude, blanqueo y teñido.
          div(titulo="Las sales")
            p Las sales están constituidas por cationes (iones con carga positiva) enlazados a aniones (iones con carga negativa), y son usadas generalmente en tareas de tintura. Las más utilizadas son: sulfato de sodio, cloruro de sodio, sulfato de amonio, bicromato de potasio y sulfato de cobre.
          div(titulo="Oxidantes y reductores")
            p Los agentes oxidantes y reductores son oxidantes que, mediante una reacción química, oxidan otras sustancias. El más utilizado es el ditionito de sodio. Se pueden resaltar en este grupo los siguientes agentes: peróxido de hidrógeno (agua oxigenada), hipoclorito de sodio y clorito de sodio.
    .titulo-icono.mb-4(data-aos="fade-right")
        .titulo-icono__texto: h4.text-white.mb-0 El potencial de hidrógeno (pH) 
    .row.justify-content-center.mb-3
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right")
        p Constantemente, se escucha hablar en la cotidianidad del pH. Abordándose desde una perspectiva más simple, se puede decir que es un medidor que busca analizar la concentración de iones de hidrógeno. El pH es una medida de acidez o alcalinidad de una disolución. 
      .col-lg-8(data-aos="fade-left")
        .d-flex(style="background-color:#D9FBFC")
            img(src='@/assets/curso/temas/tema2/36.svg', alt='' style="width:314px")
            .textos.p-4.m-auto
              p.fw-bold 𝒑𝑯= −𝜶 𝑯𝟑 𝑶+
                br
                br
                |Analice la siguiente concentración:
                br
                |[𝑯𝟑 𝑶+]=𝟏∗𝟏𝟎−𝟕 𝑴 (𝟎.𝟎𝟎𝟎𝟎𝟎𝟎𝟏)
                br
                |Aplicando la fórmula anterior, el resultado sería un pH de 7, ya que: 𝒑𝑯= −𝟕
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img.d-lg-block.d-none(src='@/assets/curso/temas/tema2/37.png', alt='' style="width: 100%")
      .col-lg-8(data-aos="fade-left")
        p Aparecen tres términos importantes en lo relacionado con el potencial de hidrógeno (pH) y son los siguientes:
        ul.lista-ul--color
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            |Ácido (menor a 7)
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            |Neutro (valor 7)
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            |Alcalino (mayor a 7)
        p Los números entre paréntesis hacen referencia al rango en la escala de valores de pH según la sustancia. 
          br
          br
          | Estos se pueden medir por tiras indicadoras y peachímetros, así:
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1
          span Rango en la escala de valores de pH
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6.mb-lg-0.mb-3
            h4.text-center  Escala de valores de pH
            img(src='@/assets/curso/temas/tema2/38.svg', alt='' style="width: 100%").mb-3
            h5.text-center Nota. Tomada de Ciências e Saúde (2018).
          .col-lg-6.mb-lg-0.mb-3
            h4.text-center Escala de valores de pH en tiras reactivas 
            img(src='@/assets/curso/temas/tema2/39.png', alt='' style="width: 100%").mb-3
            h5.text-center Nota. Tomada de Liter (2020). 
    .titulo-icono.mb-4(data-aos="fade-right")
        .titulo-icono__texto: h4.text-white.mb-0 Productos auxiliares
    p.mb-5(data-aos='fade-right') Los productos auxiliares son creados como complemento para mejorar los procesos de tintorería, como la limpieza, uniformidad del color, arrugas, pH, impregnación del color, entre otras funciones más. Estos pueden poseer, o no, cargas eléctricas en su composición, igual que los colorantes. 
      br
      br
      |Observe la siguiente tabla, donde se relaciona si poseen o no:
    .row.justify-content-center.mb-5
      .col-lg-10.mb-3(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 6
          span Cargas eléctricas en productos auxiliares
        .tabla-a.color-acento-botones
            table
              caption Nota: tomada de Lockuán (2012). 
              thead(style="border-top: 0px")
                tr(style='background-color: #FF6E33')
                  th Producto
                  th   Carga eléctrica
              tbody.bg-white
                tr
                  td Aniónicos
                  td Negativa
                tr
                  td Catiónicos
                  td Positiva
                tr
                  td No iónicos
                  td No tiene
                tr
                  td Anfóteros
                  td Depende del pH
      .col-lg-10(data-aos="zoom-in")
        .tarjeta.p-5(style="background-color: #dee9f0 ")
            p  #[span.color-acento-contenido.fw-bold ¿Alguna vez ha escuchado hablar de un producto insoluble o precipitado?]
              br
              br
              |Esto sucede cuando se mezcla un producto que contiene una carga positiva con otro de carga negativa. Ahora que lo sabe, tenga presente que esta acción no se puede hacer.
    p.mb-5(data-aos='fade-right') La siguiente tabla muestra las cargas eléctricas en productos auxiliares:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in") 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 7
          span Cargas eléctricas en productos auxiliares
        .tabla-a.color-acento-botones
            table
              caption Nota: tomada de Lockuán (2012). 
              thead(style="border-top: 0px")
                tr(style='background-color: #FF6E33')
                  th(style='width: 30%') PRODUCTO AUXILIAR
                  th DESCRIPCIÓN
              tbody.bg-white
                tr
                  td.text-center(style='width: 30%') Humectantes
                  td Facilitan el proceso de saponificación, donde agentes grasos se unen con bases de pH alto y permiten que el color penetre en la fibra.
                tr
                  td.text-center(style='width: 30%') Igualadores
                  td Ayudan a conservar la uniformidad del tono de color desde el baño de la tintura.
                tr
                  td.text-center(style='width: 30%') Detergentes
                  td Se encargan de la limpieza superficial de suciedades.
                tr
                  td.text-center(style='width: 30%') Antiinmigrantes
                  td En el teñido continuo, se utilizan especialmente durante el secado, para evitar que el color migre y, con ello, no se generen veteados y diferencias en la intensidad del color.
                tr
                  td.text-center(style='width: 30%') Emulsionantes
                  td Eliminan grasas y aceites.
                tr
                  td.text-center(style='width: 30%') Secuestrantes
                  td Mediante procesos para eliminar residuos de metales pesados, en especial con fibras vegetales y sintéticas, se utilizan estos productos.
                tr
                  td.text-center(style='width: 30%') Antiquiebres
                  td Previenen arrugas y daños mecánicos. 
                tr
                  td.text-center(style='width: 30%') Mejoradores de solidez
                  td Es utilizado después de la tintura; tiene dos fines diferentes, el primero, donde retira residuo de colorantes, o fijación iónica con moléculas directamente en la fibra.
                tr
                  td.text-center(style='width: 30%') Dispersantes
                  td Permite impregnar y mantener desde el baño de color.
                tr
                  td.text-center(style='width: 30%') Buffers (tampones)
                  td Controlan el valor óptimo necesario de pH en el material y en el baño de tintura.
                tr
                  td.text-center(style='width: 30%') Antiespumantes
                  td Provoca humectación en el material sin generar espuma.
    .titulo-icono.mb-4(data-aos="fade-right")
        .titulo-icono__texto: h4.text-white.mb-0 Los colorantes
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-right")
        p Los colorantes son los que proporcionan la tonalidad en las fibras, no deben ser usados sin realizar un análisis previo, se deben utilizar según sus propiedades y de las fibras a intervenir, para obtener buenos resultados. 
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/adjunto.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Colorantes de tintoreria
                  p.mb-0.text-small Profundice en los aspectos clave del uso de colorantes en diversos tipos de fibras y su clasificación, estudiando el Anexo_3_ColorantesDeTintoreria. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_3_ColorantesDeTintoreria.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-4.col-8(data-aos="fade-left"): img.d-lg-block.d-none(src="@/assets/curso/temas/tema2/40.png" alt="")
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.d-lg-block.d-none(data-aos="fade-right"): img(src="@/assets/curso/temas/tema2/41.png" alt="")
      .col-lg-8(data-aos="fade-left")
        p Por otra parte, los #[span.color-acento-contenido.fw-bold blanqueadores óptimos] son productos que absorben la radiación en el espectro ultravioleta (no visible para los humanos) y la devuelven a un color visible en el rango azul-violeta. Se utilizan para conseguir un mayor grado de blancura, y su contenido en el sustrato oscila entre 0,01 y 0,5 % spm. La sensibilidad al pH plantea la mayoría de los problemas, porque tienden a amarillear en medios alcalinos, por lo que deben neutralizarse cuando el pH es superior a 5, generalmente con ácido acético. 
          br
          br
          | Del mismo modo, la temperatura de secado y el suavizante utilizados en el acabado deben seleccionarse correctamente. En el mercado, se puede encontrar en versión líquida o polvo. Generalmente poseen una buena solidez, migración del color, alta sensibilidad al pH y son sensibles a metales pesados.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4  Procesos
    .row.justify-content-center.mb-4
      .col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
        p Existen diferentes procesos de tinturado para las fibras textiles. Como punto de partida, se aborda el procedimiento del algodón y la lana. Es importante saber que, antes de iniciar con el color, siempre se deben retirar impurezas, ya sean preexistentes, como sales, sucios, aceites, hierro, pigmentos, etc., o las que han sido agregadas mientras se ejecutó la hilación, como, por ejemplo, los sustratos.
      .col-lg-8(data-aos="fade-left")
        .d-flex(style="background-color:#D9FBFC")
              img(src='@/assets/curso/temas/tema2/42.jpg', alt='' style="width:314px")
              .textos.p-4.m-auto
                p  Para algodones, se presentan 3 tipos diferentes de recetas para realizar el teñido, estos son: descrudado, blanqueo con peróxido de hidrógeno y descrude, y blanqueos simultáneos. 
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img.d-lg-block.d-none(src="@/assets/curso/temas/tema2/43.png" alt="")
      .col-lg-8(data-aos="fade-left")
        p Además de la reacción química que suele generarse con la fibra celulósica, también por el colorante hidrolizado que reacciona con el agua, se debe tener siempre presente retirarlo en su totalidad a través del lavado.
        .tarjeta.color-secundario.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/adjunto.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recetas quimicas para tintura de algodon y lana
                  p.mb-0.text-small Aprenda las recetas químicas y el procedimiento para el proceso de tinturado del algodón y la lana, explorando el Anexo_4_RecetasQuimicasParaTinturaDeAlgodonYLana. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_4_RecetasQuimicasParaTinturaDeAlgodonYLana.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
        p En el procesamiento del #[span.color-acento-contenido.fw-bold poliéster], su preparación se da también en tres fases: la primera, un lavado previo para el descrude de la fibra; segundo, un proceso de blanqueo; y, por último, el proceso de termo fijación del tejido para sellar las dimensiones por encogimiento. 
          br
          br
          | Para poliéster, se presentan 3 tipos diferentes de recetas para realizar el teñido, estas son: descrudado, blanqueo químico con clorito de sodio y blanqueo químico con carriel.
          br
          br
          |Aprenda las recetas químicas y el procedimiento para el proceso de tinturado del poliéster, en el 
        a.anexo(:href="obtenerLink('downloads/Anexo_5_RecetasQuimicasParaTinturaDePoliester.pdf')" target="_blank" type="application/pdf")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Anexo_5_RecetasQuimicasParaTinturaDePoliester. 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p Una recomendación muy importante para completar con alta calidad un proceso de tinturado es realizar, al final, un lavado reductivo, que básicamente es limpiar la superficie de la fibra para retirar los residuos de colorante disperso; en la mayoría de casos, el hidrosulfito de sodio es usado como agente reductor. 
          br
          br
          |Aprenda las recetas químicas y el procedimiento para el proceso de lavado reductivo, en el 
        a.anexo(:href="obtenerLink('downloads/Anexo_6_RecetasQuimicasParaLavadoReductivo.pdf')" target="_blank" type="application/pdf")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo.] Anexo_6_RecetasQuimicasParaLavadoReductivo.  
      .col-lg-5.col-8(data-aos="fade-left"): img.d-lg-block.d-none(src="@/assets/curso/temas/tema2/44.png" alt="")
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img.d-lg-block.d-none(src="@/assets/curso/temas/tema2/45.png" alt="")
      .col-lg-8(data-aos="fade-left")
        p En el proceso de teñido de fibras acrílicas, se presenta una atracción entre opuestos llamada polar, donde los colorantes son atraídos por las cargas negativas de este tipo de fibra. Por ello, en el proceso de tinturado, es necesario el uso de retardantes, ya que sin ellos se pueden causar irregularidades en el tejido final.
          br
          br
          | Existe una división entre las fibras acrílicas:
        ul.lista-ul--color
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | #[span.color-acento-contenido.fw-bold HB:] debido al encogimiento de un 30%, aproximadamente, del hilo, ocasionado por el proceso de vaporización o inmersión (del hilo) en agua hirviendo, se genera un aspecto de volumen similar a la lana.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            | #[span.color-acento-contenido.fw-bold Regular:] estas tienen un aspecto muy sedoso en los hilos y no requieren un proceso de pre-encogimiento con las fibras HB, ya que ha sido ejecutado con anterioridad en el hilado.
        .tarjeta.color-secundario.p-3.mb-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/adjunto.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Recetas quimicas para tinturado de fibras acrilicas
                  p.mb-0.text-small Aprenda las recetas químicas y el procedimiento para el proceso de tinturado de las fibras acrílicas, en el Anexo_7_RecetasQuimicasParaTinturadoDeFibrasAcrilicas
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_7_RecetasQuimicasParaTinturadoDeFibrasAcrilicas.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
        p Este #[span.color-acento-contenido.fw-bold blanqueamiento óptico] se realiza sobre fibras naturales para eliminar los pigmentos que las vuelven amarillas; oxidantes como NaClO o H2O2 cambiarán de color y eliminarán la mayoría de los colorantes sintéticos y naturales. Sin embargo, el grado de blancura obtenido por blanqueamiento químico incluye un tinte amarillento pálido, no se puede obtener verdaderamente blanco. 
    p(data-aos="fade-right") En algunos casos, es necesario aplicar un segundo proceso de blanqueo químico para reducir el amarilleo residual del sustrato. La colorimetría nos dice que debemos utilizar el azul porque es el contrario. La solución es desarrollar sustancias fluorescentes que absorban el espectro ultravioleta y emitan luz visible en el espectro azul. El uso de estos agentes blanqueadores puede mejorar el tono azul, sin pérdida de brillo, porque el ojo humano no puede percibir la región ultravioleta absorbida.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3(data-aos="fade-left")
        p En relación con blanqueadores y blanqueamiento óptico, tenga presente aspectos como:
        ul.lista-ul--color
          li.d-flex.mb-4.ms-4
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Los blanqueadores óptimos suelen ser objetos incoloros o ligeramente coloreados, que tienen la característica de absorber rayos ultravioleta invisibles y emitirlos como luz visible de una determinada longitud de onda (correspondiente a las bandas espectrales violetas, azules, o incluso verdes, en muchos casos). 

          li.d-flex.mb-4.ms-4
            i.fas.fa-tshirt(style='color: #FF6E33')
            | A medida que aumenta la cantidad de luz emitida por el cuerpo, aumenta la sensación de blancura, es decir, sus acciones se basan en el principio de fluorescencia. 
          li.d-flex.mb-4.ms-4
            i.fas.fa-tshirt(style='color: #FF6E33')
            | El efecto blanqueador del agente fluorescente es un efecto aditivo, es decir, el amarilleo se corrige añadiendo la luz proporcionada por el agente blanqueador y la luz proporcionada por la luz ultravioleta invisible.
          li.d-flex.mb-4.ms-4
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Se resalta que, realmente, no es un teñido. El blanqueo óptimo es un proceso que también pasa por procesos previos, como son el descrude y el blanqueo; en este caso, con la finalidad de obtener un blanco puro como color.
          li.d-flex.mb-4.ms-4
            i.fas.fa-tshirt(style='color: #FF6E33')
            | En otros casos, para proporcionar una apariencia de limpieza en colores claros, se utilizan pequeñas cantidades de blanqueador óptimo en el proceso de tinturado.
          li.d-flex.mb-4.ms-4
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Una segunda opción es aplicar el tono claro en sustratos anteriormente blanqueados.
      .col-lg-4(data-aos="fade-left"): img.d-lg-block.d-none(src="@/assets/curso/temas/tema2/46.png")
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.5  Control de calidad del color
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src="@/assets/curso/temas/tema2/47.png")
      .col-lg-9(data-aos="fade-left")
        p En el control de calidad de textiles teñidos, se realiza una inspección visual del color, donde factores como la iluminación, el color gris neutro de las paredes de la cabina y los ángulos de ubicación de la visión y la muestra deben ejecutarse sin pasar ninguno por alto, evitando generar resultados erróneos.
          br
          br
          | A continuación, se observan propuestas óptimas para llevar a cabo este proceso:
    TabsA.color-acento-botones.mb-5
      .tarjeta.p-4(titulo="Forma incorrecta" style="background-color: #cdfafb ")
        h4 Forma incorrecta
        p Ángulo de 0º/ 45º o 45º/0º entre la dirección de la iluminación y la observación.
        img(src='@/assets/curso/temas/tema2/48.svg', alt=''  style="width: 276px").m-auto
      .tarjeta.p-4(titulo="Forma correcta 1" style="background-color: #cdfafb ")
        .row.justify-content-center
          .col-lg-7
            h4 Forma incorrecta
            p Ángulo de 0º/ 45º o 45º/0º entre la dirección de la iluminación y la observación.
            
          .col-lg-4: img(src='@/assets/curso/temas/tema2/49.svg', alt='' style="width: 276px").m-auto
      .tarjeta.p-4(titulo="Forma correcta 2" style="background-color: #cdfafb ")
        .row.justify-content-center
          .col-lg-7
            h4 Forma correcta 2
            p Ángulo de 90º, la luz y el observador deben ubicarse a una distancia y altura iguales, para permitir una visión en 45º.
          .col-lg-4: img(src='@/assets/curso/temas/tema2/50.svg', alt='' style="width: 276px").m-auto
      .tarjeta.p-4(titulo="Recomendaciones" style="background-color: #cdfafb ")
        h4 Recomendaciones
        p Para tener mejor precisión en cuanto al color y cuidar el descanso de la vista, tenga en cuenta: 
        ul.lista-ul--color
          li.d-flex.mb-2
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Solo utilice una fuente de luz, no permita ni siquiera la luz natural de una ventana. 

          li.d-flex.mb-2
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Siempre inicie la revisión por los tonos claros, seguidos por los medios y, por últimos, los más oscuros. 
          li.d-flex.mb-2
            i.fas.fa-tshirt(style='color: #FF6E33')
            | Los tonos rojos permanecen más tiempo en nuestra retina, por este motivo, es mejor que se tome un descanso antes de revisar otro color, muy probablemente alteraría el matiz.

    


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.fondo-textil
  background-image: url('../assets/curso/temas/tema2/1.png')
  background-size: cover
  background-position: center
  background-repeat: no-repeat
.bg
  &__1
    background-image: url('../assets/curso/temas/tema2/bg1.svg')
    background-size: cover
    background-position: center
    background-repeat: no-repeat
.fondo-card
  background-image: url('../assets/curso/temas/tema2/fondo-card.svg')
  background-size: cover
  background-position: center
  background-repeat: no-repeat
</style>
