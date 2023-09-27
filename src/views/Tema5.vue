<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Acabados y terminados en los procesos textiles
    .fondo-1.mn.p-5.mb-4(data-aos="zoom-in")
      .fondo-textil.p-4.mb-5
        .row.justify-content-center
          .col-lg-10
            .tarjeta.bg-white.p-4.m-5
              p.mb-0 Los tratamientos posteriores a las operaciones de coloración tienen por objeto mejorar el aspecto y las propiedades de las materias textiles antes de su comercialización, así como proporcionarles algunas cualidades que mejoren su comportamiento al uso y su mantenimiento; también eliminar o minimizar algunas cualidades no deseables de los mismos.
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          p Para ello, se realizan operaciones como:
          ul.lista-ul--color
            li.d-flex.mb-1.ms-4
              i.fas.fa-tshirt(style='color: #FF6E33')
              p.mb-2 #[span.color-acento-contenido.fw-bold Aprestos:] cuando los efectos conseguidos se deben a la aplicación de productos químicos, tales como rigidez, estabilidad, tactosidad, impermeabilizar o aumentar su peso.
            li.d-flex.mb-1.ms-4
              i.fas.fa-tshirt(style='color: #FF6E33')
              p.mb-2 #[span.color-acento-contenido.fw-bold Acabados:] cuando los efectos conseguidos se deben a la aplicación de tratamientos físicos y/o mecánicos, tales como calor, presión, humedad, etc.
          p Ambos tipos de operaciones se combinan con frecuencia para la obtención de los efectos requeridos.
        .col-lg-5.col-8(data-aos="fade-left"): img(src='../assets/curso/temas/tema5/2.png' alt='' )
    .titulo-icono.mb-4(data-aos="fade-right")
      .titulo-icono__texto: h4.text-white.mb-0 Clasificación de los acabados
    p.mb-5(data-aos='fade-right') Esta clasificación se da a partir de lo que lo origine, modifique o alguna característica principal, como se muestra a continuación:
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3(data-aos="fade-right"): img.d-lg-block.d-none(src='../assets/curso/temas/tema5/3.png' alt='' )
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--red")
          div(titulo="Según la duración")
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | #[b Temporal:] algunas lavadas. 
              li
                i.fas.fa-angle-right
                | #[b Permanente:] acabados físicos, vida útil de la prenda. 
              li
                i.fas.fa-angle-right
                | #[b Renovable:] Puede renovarse en el hogar o tintorería.
          div(titulo="Según la limpieza")
            ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Desgomado de la seda. 
                li
                  i.fas.fa-angle-right
                  | Descrude del algodón. 
                li
                  i.fas.fa-angle-right
                  | Lavado de la lana.
          div(titulo="Según el diseño y color")
            p El uso de tintes que penetran y dan color a las fibras, se usa para dar color y crear grafías, como en fibras - Hilos - Teñir en Solución - Materia prima – piezas, entre las técnicas de estampación, contempladas como Rotativa, serigrafía, sublimación. Transfer digital.
          div(titulo="Según textura")
            p Se utiliza para mejorar la textura de su superficie y el tacto, como el Calandrar Satinado, Glaseado, Afelpado o #[em Napping], Mercerizado y Sanforizado, Reducción de brillo, grabado, gofrado, Aumento de cuerpo- #[em sizing], Encerado ciré, Moiré, etc.
          div(titulo="Según desempeño")
            p Se utiliza para mejorar el desempeño y utilidad de la tela. Resistencia a pliegues y arrugas, Planchado durable, Repelente al agua / Impermeabilización, Control de encogimiento, Resistencia a la suciedad, Antiestática, Antibacterial, Resistente a polillas, Ignición retardada, Resistencia al moho.
            

</template>

<script>
export default {
  name: 'Tema5',
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
.fondo-1
  background-image: url('../assets/curso/temas/tema5/fondo-1.svg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
.fondo-textil
  background-image: url('../assets/curso/temas/tema5/1.jpg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
</style>
