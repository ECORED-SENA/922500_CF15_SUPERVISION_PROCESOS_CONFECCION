<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Desgastes y procesos de acabados en el dénim
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/tema3/1.png', alt='')
      .col-lg-7
        p La documentación dentro de las líneas de producción y dentro de las plantas de procesos productivos de las compañías son importantes y comunes, aunque cada empresa tiene formatos construidos de manera autónoma para tener datos numéricos y así mismo tener un control y dominio sobre las unidades producidas, paros mecánicos, personas que no asistieron a laborar, producción con defectos de calidad, clasificación de prendas que no cumplen los parámetros, etc. Lo que focaliza lo importante de tener formatos y documentación de métodos de trabajo como realizar operaciones y estructuras de trabajo para tomar decisiones correctivas y mejora continua.
          br
          br
          | Estos procesos son unos de los más importantes dentro de la industria de la moda, posicionándose como uno de los fuertes en la producción de prendas a nivel nacional e internacional, haciendo parte de la cadena productiva, la cual debe identificarse para una correcta supervisión.
    .titulo-icono.mb-4
        .titulo-icono__texto: h4.text-white.mb-0 Maquinaria
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p La maquinaria empleada en procesos de desgaste y acabados en prendas con base dénim permite optimizar el tiempo dentro de la cadena productiva en empresas de confección. Estos procesos pueden ser llevados a cabo dentro de la misma empresa, o esta puede subcontratar maquilas especializadas para dicha labor. Como se ha mencionado, estos factores dependen de las necesidades de cada empresa y las particularidades que contiene cada una.
          br
          br
          |Entre las máquinas más representativas para estos procesos, están las máquinas rotativas, de las cuales se puede decir:
        ul.lista-ul--color
          li.d-flex.mb-1.ms-3
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Que son empleadas para procesos en húmedo.
          li.d-flex.mb-1.ms-3
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Poseen un contenedor cilíndrico externo y un tambor interno que va girando junto con el cilindro externo.
          li.d-flex.mb-1.ms-3
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Ello hace que permita el acceso a los tambores, que por lo general están perforados.
          li.d-flex.mb-1.ms-3
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Requieren poca agua en las operaciones y tienen control por computador.
          li.d-flex.mb-1.ms-3
            i.fas.fa-tshirt(style='color: #FF6E33')
            p.mb-0 Pueden programarse para una operación en específico.
      .col-lg-5.col-8: img(src='@/assets/curso/temas/tema3/2.png', alt='')
    p.text-center Esta maquinaria implica procesos como:
    .bg-middle.p-5.pb-0.mb-5.mn
      .contenido
        .row.justify-content-center
          .col-lg-3.mb-lg-0.mb-4.col-6
            img(src='@/assets/curso/temas/tema3/3.svg', alt='' )
          .col-lg-9
            .row.justify-content-center.mb-3
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Extracción
                  p Una vez las prendas pasan por proceso en húmedo, son sometidas a extracción del exceso de agua, produciendo reducción en los tiempos de secado y uso de la energía.
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Secado por tomboleado 
                  p Una vez se tienen las prendas con la extracción del agua, pasan por un secado, lo que permite carga y descarga de forma rápida; también estas máquinas se emplean para suavizar y pre-encoger las prendas.
              .col-lg-4.mb-lg-0.mb-3
                .bg-white.p-4.h-100
                  h4
                    span.color-acento-contenido Planchado 
                  p Dependiendo del proceso, una prenda puede pasar por varias fases de planchado. Un ejemplo son los pantalones en dénim, con whiskers o bigotes, los cuales son planchados varias veces para que se fije el desgaste; también realizar pliegues o plisados necesita de planchado en varias ocasiones para lograr el efecto. Por último, el planchado que se le da a una prenda para empaque dependerá de la apariencia que se desea obtener para mostrar el producto.
            p #[span.color-acento-contenido.fw-bold ¡Para tener en cuenta!] Lavado en prenda: se refiere a técnicas de acabado en húmedo. Aquí la misma máquina rotativa puede ser empleada para varios procesos, como el desengomado, el teñido, tratamientos con enzimas, lavado con piedras, acabados con suavizantes, tratamiento de ozono, aplicación de resinas, entre otros. Acabado en prenda: Incluye técnicas de acabado en húmedo y en seco.
    .titulo-icono.mb-4
        .titulo-icono__texto: h4.text-white.mb-0 Acabados en húmedo
    p.mb-5(data-aos='fade-right') El procesamiento en húmedo en prenda incluye varias técnicas, como el desengomado, tratamientos con enzimas, sobre teñido, entintados o lavado con piedras, así como acabados en resina y suavizado. Estos procesos mencionados necesitan de una revisión final, en la que características implícitas en los lineamientos de calidad se respeten, para dar aprobación a cada prenda.
      br
      br
      |Dentro de los procesos en húmedo, están:
      .tarjeta.bg-card.p-5.mb-5
        LineaTiempoC.color-acento-botones(text-small)
          .row(titulo="Desengomado / lavado")
            .col-md-8.mb-4.mb-md-0
              h5
                span.color-acento-contenido  Desengomado / lavado
              p Las prendas en dénim, una vez son armadas y tinturadas, pasan por un proceso de desengomado, que consiste en remover componentes de engomados aplicados en los hilos de la urdimbre durante el tejido del textil, para ello, se utilizan enjuagues y químicos que permiten el suavizado de la prenda y fijar el color deseado
            .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/4.png', alt='')
          .row(titulo="Pérdida de color por abrasión")
            .col-md-8.mb-4.mb-md-0
              h5
                span.color-acento-contenido  Pérdida de color por abrasión
              p También llamado stonewashing o lavado con piedras, esto acelera la decoloración y el suavizado en las prendas con base dénim. Las piedras empleadas para este proceso pueden ser sintéticas o naturales; el tamaño y la forma dependen del diseño del acabado; aunque una prenda nunca quedará igual a otra, estas quedarán muy similares. Esta técnica se puede combinar con otros procesos de acabado, como el desengomado y lavado con enzimas.
            .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/5.png', alt='')
          .row(titulo="Acabado por corrosión")
            .col-md-8.mb-4.mb-md-0
              h5
                span.color-acento-contenido  Acabado por corrosión
              p Es una técnica química que consiste en remover el color de áreas seleccionadas en una tela que ya fue teñida. Los químicos suelen ser oxidantes, como el permanganato de potasio, o agentes reductores, como el hipoclorito de sodio. Hay actualmente técnicas que logran acabados muy similares a esta técnica, como los procesos de ozono, que ofrecen un método suave y limpio en la pérdida de color; también está aquella que involucra el uso de una enzima lacasa, con la que se obtienen resultados similares.
            .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/6.png', alt='')
          .row(titulo="Acabados químicos")
            .col-md-8.mb-4.mb-md-0
              h5
                span.color-acento-contenido  Acabados químicos
              p Contemplados dentro de los acabados en húmedo, logrando suavizados en las prendas, acabados con resina, entintado y sobre teñidos. Estos acabados, por lo general, solo requieren de un secado por tomboleo, a diferencia de los demás.
            .col-md-4.col-6: img(src='@/assets/curso/temas/tema3/7.png', alt='')
    .titulo-icono.mb-4
        .titulo-icono__texto: h4.text-white.mb-0 Acabados en seco
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p Los acabados en seco se realizan sin presencia de humectación; se pueden realizar por medio de máquinas, herramientas o procesos manuales; también pueden ser fusionados con técnicas de acabados húmedos. La finalidad de este tipo de acabados es exponer los hilos blancos internos del tejido dénim, por medio de la eliminación de la capa externa.
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/adjunto.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Tecnicas de acabado en seco.
                  p.mb-0.text-small Puede observar las diferentes técnicas de este tipo de acabado consultando el Anexo_8_TecnicasDeAcabadoEnSeco.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_8_TecnicasDeAcabadoEnSeco.pdf')" target="_blank" type="application/pdf")
                    span Descargar
                    i.fas.fa-file-download
      .col-lg-5.col-8: img(src='@/assets/curso/temas/tema3/8.png', alt='')
</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass"></style>
