<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Procesos textiles
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.col-12.mb-4.mb-lg-0.order-2
          img(src='@/assets/curso/temas/tema1/1.png', alt='')
        .col-lg-9.order-1
          .bloque-texto-a__texto.p-4
            p Los procesos textiles tienen como fundamento el tratamiento de las fibras, cuya finalidad es generar apariencias en los tejidos planos y de punto, con colores específicos como los trabajados desde tintura, estampados completos y sectorizados en partes de piezas, procesos de suavizado en lavandería, desgastes localizados en base dénim, y bordados.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        p Estos diseños parten del proceso creativo en la creación de colecciones y prendas de vestir, teniendo como base la aplicación de conceptos que, dirigidos a un público objetivo, se establecen las ilustraciones o diseños en una tela en su totalidad o en partes de una prenda, #[span.color-acento-contenido lo que permite contemplarse en unidad visual a partir de la forma y el color.]
      .col-lg-8
        .d-flex(style="background-color:#D9FBFC")
          img(src='@/assets/curso/temas/tema1/2.png', alt='' style="width:314px")
          .textos.p-4.m-auto
            h5 ¡Importante!
            p Los esquemas básicos de color utilizados en el manejo de círculo cromático, en temas como tinturado, son la base de las combinaciones que permiten obtener diversos tonos.
    .bg-middle.p-5.pb-0.mb-5.mn
      .contenido
        .row.justify-content-center
          .col-lg-3.mb-lg-0.mb-4.col-6
            img.d-lg-block.d-none(src='@/assets/curso/temas/tema1/3.png', alt='' )
          .col-lg-9
            .bg-white.mx-2.p-5
              SlyderE(indicadores="derecha")
                .row
                  .col-md-8.mb-4.mb-md-0
                    h4
                      span.color-acento-contenido Teoría del color 
                    p El esquema de color es un concepto incluido dentro de la teoría de color y hace referencia a las gamas y paletas que se establecen en el color.
                  .col-md-4
                    figure
                      img(src='@/assets/curso/temas/tema1/4.png', alt='Texto que describa la imagen')
                .row
                  .col-md-8.mb-4.mb-md-0
                    h4
                      span.color-acento-contenido Paletas y técnicas
                    p A partir de análisis de círculos cromáticos, se abordan las paletas y técnicas para sacar la combinación ideal ligada al vestuario.
                  .col-md-4
                    figure
                      img(src='@/assets/curso/temas/tema1/5.png', alt='Texto que describa la imagen')
                .row
                  .col-md-8.mb-4.mb-md-0
                    h4
                      span.color-acento-contenido Aplicabilidad del color 
                    p Cuando se habla de color, en términos generales, es aplicable a cualquier área, dado que es universal, dependerá del operario su uso y aplicabilidad de acuerdo con la propuesta y producto esperado.
                  .col-md-4
                    figure
                      img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen')
                .row
                  .col-md-8.mb-4.mb-md-0
                    h4
                      span.color-acento-contenido Esquemas básicos del color 
                    p Los esquemas básicos son vistos dentro de la clasificación de color de acuerdo con su luz y la perspectiva de la persona que mira el color.
                  .col-md-4
                    figure
                      img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')
                .row
                  .col-md-8.mb-4.mb-md-0
                    h4
                      span.color-acento-contenido Son diez esquemas básicos 
                    p Son diez los esquemas básicos: acromáticos, análogos, de choque, complementarios, monocromáticos, neutrales y complementarios divididos, también los esquemas primarios, secundarios y terciarios.
                  .col-md-4
                    figure
                      img(src='@/assets/curso/temas/tema1/8.png', alt='Texto que describa la imagen')
    p.text-center.fw-bold.mb-5 Observe, a continuación, una breve descripción de los esquemas básicos:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4(style="background-color: #F5E6E9")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/9.svg' alt='AvatarTop')
        h5.text-center 
          span.color-acento-contenido Esquema acromático 

        p.text-center Es aquel esquema sin color, en el que solo se encuentra el negro, el blanco y escala de grises.
      .tarjeta.p-4(style="background-color: #F5E6E9")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/10.svg' alt='AvatarTop')
        h5.text-center 
          span.color-acento-contenido Esquema análogo 
        p.text-center Utiliza cualquiera de los tres tonos consecutivos o cualquiera de sus tintes y matices del círculo cromático.
      .tarjeta.p-4(style="background-color: #F5E6E9")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/11.svg' alt='AvatarTop')
        h5.text-center 
          span.color-acento-contenido Esquema de choque 
        p.text-center Combina un color con el tono que está a la derecha o a la izquierda de su complemento en el círculo cromático.
      .tarjeta.p-4(style="background-color: #F5E6E9")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/12.svg' alt='AvatarTop')
        h5.text-center 
          span.color-acento-contenido Esquema complementario 

        p.text-center Son los opuestos directos del círculo complementario.
      .tarjeta.p-4(style="background-color: #F5E6E9")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/13.svg' alt='AvatarTop')
        h5.text-center 
          span.color-acento-contenido Esquema monocromático  
        p.text-center Utiliza un tono en combinación con cualquiera de sus tintes y matices o con todos los presentes.
      .tarjeta.p-4(style="background-color: #F5E6E9")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/14.svg' alt='AvatarTop')
        h5.text-center 
          span.color-acento-contenido Esquema neutral 

        p.text-center Utiliza un tono que se ha disminuido o neutralizado con el agregado de su complemento o del negro, es decir, de claros a oscuros de una misma gama.
      .tarjeta.p-4(style="background-color: #F5E6E9")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/15.svg' alt='AvatarTop')
        h5.text-center 
          span.color-acento-contenido Esquema complementario dividido 
        p.text-center Consta de un tono y los dos tonos a ambos lados de su complemento dentro del círculo cromático.
      .tarjeta.p-4(style="background-color: #F5E6E9")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/16.svg' alt='AvatarTop')
        h5.text-center 
          span.color-acento-contenido Esquema primario   

        p.text-center Son todos los tonos puros del rojo, amarillo y azul.
      .tarjeta.p-4(style="background-color: #F5E6E9")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/17.svg' alt='AvatarTop')
        h5.text-center 
          span.color-acento-contenido Esquema secundario 

        p.text-center Surge de la combinación de los tonos primarios para obtener el verde, el violeta y el naranja.
      .tarjeta.p-4(style="background-color: #F5E6E9")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/18.svg' alt='AvatarTop')
        h5.text-center 
          span.color-acento-contenido Esquema de triada terciario 
        p.text-center Surge de una de dos combinaciones: naranja rojizo, verde amarillento y violeta azulado, o verde azulado, naranja amarillento y violeta rojizo; todos los equidistantes uno del otro en el círculo cromático.
    p.mb-5(data-aos='fade-right').fw-bold.text-center También se encuentran otros esquemas de mayor complejidad, como los siguientes: 
    .bg-card.p-lg-5.p-2.tarjeta
        LineaTiempoC.color-acento-botones(text-small)
          .row.justify-content-center(titulo="Tétradas")
            .col-md-7.mb-4.mb-md-0
              h5 Tétradas 
              p Están formados por dos pares de colores complementarios para que en total sea una combinación de cuatro colores. Con esta combinación se logran resultados muy llamativos.
            .col-md-4: img(src='@/assets/curso/temas/tema1/19.svg', alt='')
          .row.justify-content-center(titulo="Colores complejos ")
            .col-md-7.mb-4.mb-md-0
              h5 Colores complejos 
              p Son aquellos colores que, combinados, representan cambio de textura o matiz, entre ellos se encuentran los metalizados o colores fluorescentes.
            .col-md-4: img(src='@/assets/curso/temas/tema1/20.png', alt='')
          .row.justify-content-center(titulo="Discordancia y disonancia")
            .col-md-7.mb-4.mb-md-0
              h5 Discordancia y disonancia
              p En este punto es que se puede jugar con las combinaciones que no necesariamente están guiadas según la regla de combinación. En el sector de la moda, suele verse mucho para generar una estructura visual que se integre en el vestuario y genere una unidad visual llamativa.
            .col-md-4: img(src='@/assets/curso/temas/tema1/21.png', alt='')
          .row.justify-content-center(titulo="Paletas según <br> temperatura del color")
            .col-md-7.mb-4.mb-md-0
              h5 Paletas según temperatura del color
              p Dentro de las paletas según la temperatura se encuentran los fríos y los cálidos.
            .col-md-4: img(src='@/assets/curso/temas/tema1/22.png', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
