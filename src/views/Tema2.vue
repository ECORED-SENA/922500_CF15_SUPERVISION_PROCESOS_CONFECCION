<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Tintorería y lavandería
    .bg__1.mn.p-5
      .fondo-textil.p-5.mb-5
        .row.justify-content-center
          .col-lg-10
            .tarjeta.bg-white.p-4.m-5
              p.mb-0 Desde tiempos milenarios, en la moda se ha evidenciado el uso del color como un elemento cultural clave para identificar diversos modos de vivir, representados a través de la vestimenta.
      p.mb-5(data-aos='fade-right') El siguiente video, expone aspectos y elementos que facilitan una comprensión más amplia de los procesos de tintorería y lavandería y su importancia en la vida de las sociedades. Obsérvelo con atención:
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.mt-2 Video. Leyenda del video 
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .bloque-texto-d.color-extra.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style='color: ')
            p.text-regular Se define tintorería al “conjunto de procesos químicos que permiten al sustrato, adquirir un color, de acuerdo con el requerimiento final” (p. 3). Estas acciones encaminadas a darle color a una materia prima en crudo se generaron a través de diferentes técnicas rudimentarias, haciendo uso de tintes naturales que, a su vez, se convirtieron en colorantes sintéticos al desarrollarse la química. Asimismo, la lavandería es un proceso inherente a la tintorería, por el uso de diversas técnicas en la que se encuentra presente.  
            i.fas.fa-quote-right(style='color: ')
          .bloque-texto-d__autor 
            .h5.mb-0 - Según Lockuán (2012),
      .col-lg-4.col-7: img(src='@/assets/curso/temas/tema2/2.png', alt='')
    p.mb-5(data-aos='fade-right') De esta manera, se han definido cuatro elementos fundamentales para llevar a cabo el proceso de tintorería:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1 
          br
          span.fst-italic Elementos clave para el proceso de tintorería
        .tabla-a.color-acento-botones.mb-5
          table
            tbody(style="border: 2px solid #FF6E33")
              tr
                td.fw-bold.text-center(style="background-color: #FFAD8B ")  Sustrato

                td(style="background-color: #FEE7DD ") Se define como la materia prima que será teñida, la cual se puede presentar como fibras, hilos, tejidos, entre otros. Dependiendo de sus particularidades, se puede evidenciar un teñido exitoso, es decir, su estructura química, grado de blancura, intensidad de torsión, factor de cobertura, etc.
              tr
                td.fw-bold.text-center(style="background-color: #FFAD8B ") Insumos 
                td.bg-white Se refiere a los colorantes o blanqueadores ópticos. Estos elementos, ya sean químicos o naturales, son los que actúan directamente en el proceso de tintorería para realizar la impresión de color.
              tr
                td.fw-bold.text-center(style="background-color: #FFAD8B ") Maquinaria 
                td(style="background-color: #FEE7DD ") La tecnología en maquinaria utilizada para llevar a cabo los procesos de tintorería es indispensable para lograr los resultados esperados. Según el tipo de sistema de trabajo, se determina si se desarrollará a través de un sistema continuo, discontinuo o semicontinuo. 
              tr
                td.fw-bold.text-center(style="background-color: #FFAD8B ") Factor humano
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
            p.mb-0 Gaseado o chamuscado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Termo fijado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Desengomado o desencolado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Descrudado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Blanqueo
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Mercerizado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Antipilling
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Carbonizado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Decorticado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Lavado
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Hidroextracción
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Apertura de géneros de punto tubulares
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
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.col-6.mb-4.mb-lg-0.order-2
          img(src='@/assets/curso/temas/tema2/4.png', alt='')
        .col-lg-9.order-1
          .bloque-texto-a__texto.p-4
            p Además de los distintos tratamientos previos mencionados, se resalta el secado, es un elemento muy importante en el proceso textil. Ya sea en la preparación o la aplicación del tinte en un material, es necesario realizar un secado posterior. Dependiendo de las características de las fibras, la tela absorberá grandes o pequeñas cantidades de agua, de esta forma, el líquido que se encuentra en la superficie se puede eliminar mecánicamente.
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/5.png', alt='')
      .col-lg-9(data-aos="fade-left")
        p Por otro lado, para el agua que se encuentra en las fibras hinchadas, se debe llevar a cabo un proceso de secado, #[span.color-acento-contenido que por lo general se realiza utilizando aire caliente, con el fin de evaporar el agua alojada en el material.]
        .tarjeta-clip.p-4(style="background-color: #fee7dd ").mb-4
          img(src='@/assets/curso/temas/tema2/6.svg', alt='' style="width: 79px").me-4
          p Para elegir la técnica de secado más adecuada, se deben tener en cuenta diversos factores que atiendan a las distintas necesidades, como los costos, capacidad de evaporación, agua y energía requerida, etc. Además, el tejido solo debe estar en la unidad de secado el tiempo justo para eliminar la humedad. 
        p De esta manera, se identifican los siguientes sistemas de secado:
        ul.lista-ul--color.ms-4
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Secado por convección de calor.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Secado por contacto con superficies metálicas calientes.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Secado por radiación infrarroja.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Secado por microondas u ondas de alta frecuencia.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Secado por combustión.
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
      .col-lg-7.mb-lg-0.mb-3
        p El proceso de teñido se basa en la capacidad que tiene un tejido para retener los colorantes que se aplican mediante distintos métodos. El proceso de teñido textil se realiza en sustratos como: fibras, hilos, telas y prendas, a través de diferentes fases; de esta forma, dependiendo del mismo sustrato y de la etapa del proceso textil en que se aplique el teñido, es como se puede evidenciar la técnica más adecuada para alcanzar el nivel de absorción del color óptimo.
          br
          br
          | Este se realiza de tres maneras:
      .col-lg-5.col-8: img(src='@/assets/curso/temas/tema2/7.png', alt='')
    .bg-middle.p-5.pb-0.mb-5
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
      .col-lg-10 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1
          br
          span.fst-italic  Elementos clave para el proceso de tintorería
        .tabla-a.color-acento-botones.mb-5
          table
            thead(style="border-top: 0px")
              tr(style='background-color: #FF6E33')
                th Método
                th Definición
                th Ilustración
            tbody
              tr
                td.text-center Tintura por agotamiento / Sistema discontinuo
                td Se disuelve el colorante en un baño de agua, se sumerge el material y se retira una vez se evidencia la impregnación homogénea del tinte en la fibra. Después, se procede a lavar para eliminar los residuos. Al finalizar, se continúa con el secado.
                  br
                  br
                  |En este sistema, se establece que las moléculas del colorante pasan por etapas de difusión, adsorción y fijación.
                td 
                  img(src='@/assets/curso/temas/tema2/10.svg', alt='')
              tr
                td.text-center Foulardado / Sistema continuo o semicontinuo
                td En este proceso, se utilizan medios mecánicos que permiten agregar el tinte sobre la tela homogéneamente, lo cual hace que todo el textil se impregne. Una vez que ha penetrado el color en todo el material, se puede determinar que ya quedó fijado. Para concluir, se procede a lavar.
                td
                  img(src='@/assets/curso/temas/tema2/11.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/12.png', alt='')
      .col-lg-7 
        p Las operaciones que se llevan a cabo en los dos sistemas son: 
        ul.lista-ul--color.ms-4
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Agregar el colorante en el agua.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Lograr homogeneidad del tinte al penetrar en la fibra.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Fijar el colorante.
          li.d-flex.mb-1
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Concluir con el lavado del textil.
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Teñido por sistema discontinuo y semicontinuo
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/13.png', alt='')
      .col-lg-8
        p Este sistema se explica desde la teoría del por agotamiento, la cual se enfoca en la reacción química que se genera entre el material textil y el colorante que se agrega, donde se tiene en cuenta la velocidad del proceso y el balance de este.  
          br
          br
          | Para ello, se ha determinado la siguiente fórmula:
        .row.justify-content-center.mb-5
          .col-5: img(src='@/assets/curso/temas/tema2/15.svg', alt='')
    p.mb-5(data-aos='fade-right') Como es entendible, la química juega un papel fundamental en el proceso de teñido; para conocer el proceso en que una fibra es impregnada por el colorante, se han establecido cuatro etapas que explican este sistema:
    .tarjeta.bg-card.p-5.mb-4
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
              span.color-acento-contenido Tercera fase Difusión 
            p Esta es la etapa más lenta del proceso, donde el colorante es adsorbido por la superficie del material textil, al impregnarse a través de sus fibras para distribuirse de forma homogénea y, posteriormente, fijarse. De esta manera, se determina la calidad del teñido; para ello, se debe tener en cuenta la cristalinidad de la fibra, el tamaño molecular del colorante, la fuerza de la afinidad entre el colorante y la fibra, además de la temperatura de teñido.
          .col-md-2.col-6: img(src='@/assets/curso/temas/tema2/18.svg', alt='')
        .row(titulo="Cuarta fase")
          .col-md-9.mb-4.mb-md-0
            h5
              span.color-acento-contenido Cuarta fase Migración 
            p En esta última fase, se invierte el proceso, al fundirse el colorante en las capas externas de la fibra y luego migrar hacia las áreas donde hay una menor concentración, lo que permite igualar el color en el material.
          .col-md-2.col-6: img(src='@/assets/curso/temas/tema2/19.svg', alt='')
    p.mb-5(data-aos='fade-right') Al observar las diferencias entre los dos sistemas de teñido, se evidencia que comparten similitudes en varias operaciones.  Asimismo, existen diversos elementos que se deben tener en cuenta, ya sea en el sistema discontinuo o semicontinuo.
      br
      br
      |Tales elementos son:
    h3
      span.color-acento-contenido Cantidad de productos por añadir
    p.mb-5(data-aos='fade-right') Para entender cuál es la cantidad exacta de producto que se debe agregar al textil para un proceso óptimo de teñido. Por ello, las recetas de tintorería están determinadas por:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
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
          
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color: #F5E6E9").h-100
          p #[b b. Peso del material:] determina cuántas unidades de peso del producto se necesitan por 100 unidades de peso del sustrato. La fórmula es: 
          img(src='@/assets/curso/temas/tema2/20.svg', alt='')
          p #[b Donde:]
            br
            |% spm: valor porcentual sobre el peso del material

          
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/21.png', alt='')
    h3
      span.color-acento-contenido Relación de baño (R/B)
    p.mb-5(data-aos='fade-right') Se refiere a la cantidad de baño utilizado para teñir una cantidad definida del material textil. De esta manera, se entiende que, si en una receta hay mayor relación de baño, se requiere más agua blanda, energía y con ello se incrementa el peso de los productos y la cantidad de efluentes. 
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema2/22.png', alt='')
      .col-lg-6
        .tarjeta.p-3(style="background-color: #F5E6E9").h-100
          p.mb-0 Ejemplo: 
            br
            br
            |Si se carga la máquina con tela seca y se tienen los siguientes datos: 300 kg es el peso de tela y el R/B: 1:10. 
            br
            br
            |El volumen final será: 
            br
            br
            | #[span.color-acento-contenido.fw-bold.fst-italic 300 kg x 10 l/kg = 3000 l]
    h3
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
      .col-lg-10
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
    h3
      span.color-acento-contenido Curva temperatura tiempo
    p.mb-5(data-aos='fade-right') Se define como las instrucciones precisas con la temperatura establecida y las unidades de tiempo exactas para lograr el proceso con éxito. Esta práctica sugiere rigurosidad en cuanto a las instrucciones de tintorería en cuanto a las unidades de tiempo y temperatura determinadas, donde se define el punto inicial y la velocidad de subida de temperatura.
    p.text-center.fw-bold A continuación, se presentan las instrucciones para teñir un textil:
    .bg-middle.p-5.pb-0.mb-5
      .contenido
        .row.justify-content-center
          .col-lg-3.mb-lg-0.mb-4.col-6
            img(src='@/assets/curso/temas/tema2/26.png', alt='' )
          .col-lg-9
            .row.justify-content-center.mb-5
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Teñido
                  ul.lista-ul--color
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 El sustrato con agua a 40 ºC
                        br
                        |Añadir productos auxiliares, circular el baño durante 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Añadir los colorantes, circular por 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Subir a 80 ºC a 1,3 ºC/min
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Mantener por 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Añadir 1/3 de la sal
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Mantener por 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0  Añadir 1/3 de la sal
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Mantener por 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Añadir 1/3 de la sal
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Mantener por 30 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Añadir el álcali
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0  Mantener por 60 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Bajar a 60 ºC a 2 ºC/min
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0  Botar baño
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Enjuague y neutralizado
                  ul.lista-ul--color
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0  Enjuagar en frío por 10 minutos a rebose
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Botar baño
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Cargar agua
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Añadir ácido débil
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Circular por 20 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0  Botar baño
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Enjuagar
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Botar baño
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Jabonado
                  ul.lista-ul--color
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Cargar agua
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Añadir jabón
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Llevar a ebullición a 8 ºC/min
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Mantener por 10 minutos
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Botar baño
                    li.d-flex.mb-1
                      i.fas.fa-tshirt(style='color: #FF6E33')
                      p.mb-0 Enjuagar en frío por 10 minutos
    .titulo-icono.mb-4
      .titulo-icono__texto: h4.text-white.mb-0 Teñido por sistema continuo
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p Por otro lado, en el teñido por sistema continuo, además del volumen de baño establecido anteriormente en el sistema discontinuo, se tiene en cuenta el porcentaje de retención (Pick up) de un tejido. Esto hace referencia al peso que es capaz de retener el textil al ser impregnado por el tinte y pasado por el Foulard.
          br
          br
          | Además, el pick up está inversamente relacionado con la presión de exprimido en los rollos del Foulard, es decir, el pick up disminuye a mayor presión de exprimido y aumenta a menor presión de exprimido. 
          br               
          br
          | La siguiente tabla detalla algunas fórmulas aplicables al teñido por sistema continuo:
      .col-lg-4.col-8: img(src='@/assets/curso/temas/tema2/27.png', alt='')  
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3 
          br
          span.fst-italic Fórmulas aplicables al teñido por sistema continuo
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
              tr
                td.text-center.fw-bold 
                td             
                td             



          

    


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
</style>
