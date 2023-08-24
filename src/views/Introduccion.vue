<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos='fade-right') Aquí comienza el estudio del componente formativo #[span.color-acento-contenido “Procesos de producción textil (laboratorios)”]. Inicie observando con suma atención el vídeo que se muestra enseguida. #[span.color-acento-contenido ¡Adelante!]
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gXFtI_nQ49o?si=6VxEpfAg_yMG0FDL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption.mt-2 Video. Leyenda del video 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
