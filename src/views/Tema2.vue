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
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.text-regular Se define tintorería al “conjunto de procesos químicos que permiten al sustrato, adquirir un color, de acuerdo con el requerimiento final” (p. 3). Estas acciones encaminadas a darle color a una materia prima en crudo se generaron a través de diferentes técnicas rudimentarias, haciendo uso de tintes naturales que, a su vez, se convirtieron en colorantes sintéticos al desarrollarse la química. Asimismo, la lavandería es un proceso inherente a la tintorería, por el uso de diversas técnicas en la que se encuentra presente.  
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 The graphic designer
            .h6.mb-0 Lorem ipsum dolor sit amet
    


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
