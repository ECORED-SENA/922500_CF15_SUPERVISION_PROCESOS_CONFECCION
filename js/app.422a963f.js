(function(e){function a(a){for(var n,t,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)t=c[d],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&u.push(i[t][0]),i[t]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],n=!0,t=1;t<o.length;t++){var c=o[t];0!==i[c]&&(n=!1)}n&&(r.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},t={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"4cdf270e","chunk-0206bfa0":"7e00f54c","chunk-110f1f0b":"267a777d","chunk-13a6037e":"7c783580","chunk-179248a2":"59ae5f34","chunk-18f95272":"6181ad0e","chunk-2a9fce91":"fdf2a1e3","chunk-2c06842c":"a221bc3e","chunk-2d0c5615":"e3bf47c5","chunk-2d0e96ec":"7298c7f8","chunk-2d208d90":"2865485f","chunk-2d21d0e2":"318de356","chunk-2d22c123":"bdeab172","chunk-2e80bb9a":"96fe658e","chunk-319206de":"2abb35c2","chunk-36769079":"bc454c17","chunk-4cdd78c0":"7e5644f2","chunk-515a8379":"715789a0","chunk-53ccb27e":"eab4a925","chunk-55d286b8":"aa2213c0","chunk-59974754":"3e6dda21","chunk-5d1ce150":"e687a640","chunk-60cbc06b":"b40d3411","chunk-623f2040":"b0bb6d9d","chunk-659152b8":"7fea69be","chunk-6a43ec24":"c3aec84e","chunk-6e1e538a":"758e6d67","chunk-6e613899":"2b3da202","chunk-766a929b":"e41306e5","chunk-7794bb60":"af5fdaf9","chunk-c796899c":"84bb9fe7","chunk-e8a7823a":"72ee44a9","chunk-fde47172":"ce556c87",comple:"8967bc65",creditos:"af3fa96a",glosario:"7ad49bad",intro:"f62e1e53",referencias:"81f176d2",sintesis:"37557159",tema1:"6bb33d43",tema2:"86003ba7",tema3:"43d99d9e",tema4:"d2b57bf7",tema5:"e8962aec"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1,tema2:1,tema4:1,tema5:1};t[e]?a.push(t[e]):0!==t[e]&&o[e]&&a.push(t[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"895b70e2","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"b28d5569","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"14bc26b9","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"9d98fb64",creditos:"51dcd365",glosario:"e3b30e85",intro:"31d6cfe0",referencias:"209f54ba",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"e1994272",tema3:"31d6cfe0",tema4:"b22317bc",tema5:"1e0c5c44"}[e]+".css",i=s.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===i))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===n||d===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete t[e],m.parentNode.removeChild(m),o(r)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){t[e]=0})));var n=i[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,o){n=i[e]=[a,o]}));a.push(n[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=i[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+t+")",u.name="ChunkLoadError",u.type=n,u.request=t,o[1](u)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},1144:function(e,a,o){e.exports=o.p+"img/a1.ff46161c.svg"},"409f":function(e,a,o){e.exports=o.p+"img/a2.7666190b.svg"},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),t=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=o("2877"),l=Object(s["a"])(c,t,i,!1,null,null,null),d=l.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),p=o("ae58"),f=o("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema4").then(o.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return o.e("tema5").then(o.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return o.e("sintesis").then(o.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Procesos de producción textil (laboratorios)",descripcionCurso:"Este componente formativo aborda aspectos generales y claves de los procesos textiles, técnicas y prácticas en las prendas de vestir, tinturado, lavandería, desgastes, estampación y bordado, y sus diferentes métodos. Con su estudio responsable, el aprendiz se afianzará en técnicas y habilidades para la aplicabilidad de las mismas en el proceso productivo de la confección de prendas.",imagenBannerPrincipal:o("74b5"),fondoBannerPrincipal:o("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:o("1144")},{clases:["banner-principal-decorativo-2"],imagen:o("409f")},{clases:["banner-principal-decorativo-3"],imagen:o("6bea")},{clases:["banner-principal-decorativo-4"],imagen:o("c73a")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Procesos textiles",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Tintorería y lavandería",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Tratamientos previos",hash:"t_2_1"},{numero:"2.2",titulo:"Teñido",hash:"t_2_2"},{numero:"2.3",titulo:"Insumos",hash:"t_2_3"},{numero:"2.4",titulo:"Procesos",hash:"t_2_4"},{numero:"2.5",titulo:"Control de calidad del color",hash:"t_2_5"}]},{nombreRuta:"tema3",numero:"3",titulo:"Desgastes y procesos de acabados en el dénim",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Estampación y bordados",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Estampación textil",hash:"t_4_1"},{numero:"4.2",titulo:"Desarrollo y programación de estampación",hash:"t_4_2"},{numero:"4.3",titulo:"Bordado textil",hash:"t_4_3"},{numero:"4.4",titulo:"Desarrollo y programación de bordados industriales",hash:"t_4_4"}]},{nombreRuta:"tema5",numero:"5",titulo:"Acabados y terminados en los procesos textiles",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/922500-CF15-DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Procesos textiles",referencia:"Ecosistema de recursos educativos digitales SENA. (2021). <em>Teoría del color</em>",tipo:"Video",link:"https://youtu.be/rlGfZoeO3Dg"},{tema:"Tratamientos previos",referencia:"SENA. (2021). <em>Características tratamientos previos</em>",tipo:"PDF",descarga:"/downloads/Anexo_1_TratamientosPrevios.pdf"},{tema:"Tratamientos previos",referencia:"SENA. (2021). <em>Sistemas de secado.</em>",tipo:"PDF",descarga:"/downloads/Anexo_2_SistemasDeSecado.pdf"},{tema:"Tintorería y lavandería",referencia:"SENA. (2021). <em>Colorantes de tintorería.</em>",tipo:"PDF",descarga:"/downloads/Anexo_3_ColorantesDeTintoreria.pdf"},{tema:"Procesos",referencia:"SENA. (2021). <em>Recetas químicas para tintura de algodón y lana.</em>",tipo:"PDF",descarga:"/downloads/Anexo_4_RecetasQuimicasParaTinturaDeAlgodonYLana.pdf"},{tema:"Procesos",referencia:"SENA. (2021). <em>Recetas químicas para tintura del poliéster.</em>",tipo:"PDF",descarga:"/downloads/Anexo_5_RecetasQuimicasParaTinturaDePoliester.pdf"},{tema:"Procesos",referencia:"SENA. (2021). <em>Recetas químicas para el lavado reductivo.</em>",tipo:"PDF",descarga:"/downloads/Anexo_6_RecetasQuimicasParaLavadoReductivo.pdf"},{tema:"Procesos",referencia:"SENA. (2021). <em>Recetas químicas para el tinturado de fibras acrílicas.</em>",tipo:"PDF",descarga:"/downloads/Anexo_7_RecetasQuimicasParaTinturadoDeFibrasAcrilicas.pdf"},{tema:"Acabados y terminados en los procesos textiles",referencia:"SENA. (2021). <em>Técnicas de acabado en seco.</em>",tipo:"PDF",descarga:"/downloads/Anexo_8_TecnicasDeAcabadoEnSeco.pdf"},{tema:"Acabados y terminados en los procesos textiles",referencia:"Musicprogram. (2017). <em>Procesos de terminación en plantas de producción de jeans SENA</em> [Video]. YouTube",tipo:"Video",link:"https://youtu.be/e9oMRob1wVE"},{tema:"Estampación y bordados",referencia:"Alfonso, D. (2014). <em>Procesos de estampados textiles</em>",tipo:"Video",link:"https://www.youtube.com/watch?v=U6_eMFI1yS8&ab_channel=DanielaAlfonsoChi%C3%B1as"},{tema:"Estampación y bordados",referencia:"Plan Diseño. (2020). <em>Procesos y ventajas de la sublimación. Estampado por transferencia. Sublimación e impresión textil</em> ",tipo:"Video",link:"https://youtu.be/NYnBua_2wUE"},{tema:"Estampación y bordados",referencia:"SENA. (2021). <em>Materiales para estampación.</em>",tipo:"PDF",descarga:"/downloads/Anexo_10_MaterialesParaEstampacion.pdf"},{tema:"Bordado textil",referencia:"HogarTV Channel. (2016). <em>Como Se Hace el Bordado Industrial - Hogar Tv por Juan Gonzalo Angel</em>",tipo:"Video",link:"https://www.youtube.com/watch?v=sTtJvcRhdDc&ab_channel=HogarTVChannel"},{tema:"Bordado textil",referencia:"SENA. (2021). <em>Materiales para bordados.</em>",tipo:"PDF",descarga:"/downloads/Anexo_11_MaterialesParaBordado.pdf"}],glosario:[{termino:"Adsorción",significado:"proceso químico en el que la masa de un elemento se dispersa en un líquido."},{termino:"Agotamiento",significado:"proceso de teñido en que se genera una disminución del colorante del baño de tintura para ser transferido, aumentando su concentración en el material textil."},{termino:"Barniz",significado:"solución cuya composición es a base de resinas disueltas en alcohol, trementina y otras sustancias que permiten la extensión sobre una superficie textil, secándose y quedando una capa brillante."},{termino:"Capacidad de evaporación",significado:"proceso químico en el que se determina la cantidad de evaporación que puede alcanzar un líquido."},{termino:"Colorante",significado:"compuesto orgánico que, al agregarse a un sustrato, este último adquiere las cualidades de color conferidas por el primero."},{termino:"Disolvente",significado:"sustancia que ayuda en la dispersión de otra sustancia, por lo general, de consistencia espesa."},{termino:"Estampa",significado:"soporte o base a la que se le ha transferido una imagen a través de diferentes técnicas de estampación."},{termino:"Fotómetro",significado:"instrumento que es usado para medir la intensidad de la luz."},{termino:"Foulard",significado:"técnica de tintorería que se refiere al sistema de escurrido del tejido."},{termino:"Homogeneidad",significado:"capacidad de equilibrar e igualar las características de un elemento."},{termino:"<em>Offset</em>",significado:"sistema de impresión en pliegos o de manera rotativa, es uno de los métodos de estampación."},{termino:"<em>Pick up</em>",significado:"capacidad de un material textil de recoger un líquido en procesos húmedos."},{termino:"Shablones",significado:"son cuadrados o rectángulos hechos con madera para sostener la muselina sobre la cual se práctica la técnica de estampación por serigrafía."},{termino:"Termo fijado",significado:"proceso empleado en estampación, a través de una máquina al calor, que logra fijar un estampado o seca un diseño de estampado."}],referencias:[{referencia:"Casillas, C., González, M. y Salamanca, J. (s. f.). Descrude y blanqueo (madejas de algodón). Química textil",link:"http://2tm23e6.blogspot.com/p/descrude-y-blanqueo-simultaneo-madejas.html"},{referencia:"Ciências e Saúde. (2018). Potencial Hidrogeniônico (pH). Blog de Química.",link:"http://blogdequimica2014.blogspot.com/2018/04/"},{referencia:"Cotton Incorporated. (2003). Estampado textil. ",link:"https://www.cottoninc.com/wp-content/uploads/2017/12/ISP-1004-Estampado-Textil.pdf"},{referencia:"Cotton Incorporated. (2018). El arte del acabado de prendas de dénim. CottonWorks.",link:"https://cottonworks.com/es/temas/fuente-fabricacion/denim/acabado-humedo/"},{referencia:"Delgado, J. (2013). Desengomado Enzimático. Prezi.",link:"https://prezi.com/yem8p9g1ljyu/desengomado-enzimatico/"},{referencia:"Fashion Snoops. (2021). Fashion Snoops website. Sistema de Bibliotecas SENA.",link:"https://www-fashionsnoops-com.bdigital.sena.edu.co/Default.aspx"},{referencia:"Festela Store. (2020). ¿Qué son las tintas textiles? Domestika.",link:"https://www.domestika.org/es/blog/2853-que-son-las-tintas-textiles"},{referencia:"Lafayette Digitex. (s. f.). Estampación textil con sellos, una técnica legendaria y actual.",link:"https://www.lafayettedigitex.com/estampacion-textil-con-sellos-una-tecnica-legendaria-y-actual/"},{referencia:"Lamar, T. (2020). Tecnología Láser Para Acabados: Aplicación en Materiales Textiles. Textiles Panamericanos.",link:"https://textilespanamericanos.com/textiles-panamericanos/2020/07/tecnologia-laser-para-acabados-aplicacion-en-materiales-textiles/"},{referencia:"Liter. (2020). O que é o pH?",link:"https://liter.com.br/ph/"},{referencia:"Lockuán, F. (2012). La industria textil y su control de calidad. Aspectos preliminares.",link:"https://issuu.com/fidel_lockuan/docs/i._la_industria_textil_y_su_control_de_calidad"},{referencia:"MAD Ingenieros. (s. f.). Bordadoras planas | Máquinas.",link:"http://mading.co/bordadoras-planas.html"},{referencia:"Margom. (2016). Técnicas de estampación textil.",link:"https://www.margom.es/tecnicas-estampacion-textil/"},{referencia:"Mejía, F. (2014). Capítulo 6 - Los hilos y la hilatura. Programa de Textilización - Ciencias Textiles.",link:"https://programadetextilizacion.blogspot.com/2014/12/capitulo-6-maria-de-perinat-1997-2000.html"},{referencia:"Ortiz, A. (s. f.). Procesos Textiles. El profe Abdón. Moda y Confección.",link:"https://abortiz.wixsite.com/textiles/procesos-textiles"},{referencia:"Pesok, J. (2012). Introducción a la tecnología textil. D – Universidad de la República.",link:"https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/79774"},{referencia:'Philadelphia Museum of Art. (s. f.). Woman"s Dolman Wrap',link:"https://www.philamuseum.org/collection/object/104007"},{referencia:"Probordados.com. (2017). Tipos de máquinas bordadoras.",link:"https://probordados.com/tipos-maquinas-bordadoras/"},{referencia:"Puritec de México. (2019). ¿Por qué un suavizador de agua necesita sal?",link:"https://www.manantialwater.com.mx/blog/porque-suavizador-de-agua-necesita-sal/"},{referencia:"Rebasando. (s. f.). Estampado en puff.",link:"https://rebasando.com/serigrafia/239-estampado-en-puff"},{referencia:"Russell, A. (2013). Principios básicos del diseño textil. Editorial Gustavo Gili.",link:""},{referencia:"Todo Costura. (s. f.). MAQ. ZIG-ZAG (ELECTRÓNICA) WILLPEX WP20U-A1.",link:"https://www.todocostura.com.py/catalogo/producto/6565 "},{referencia:"Udale, J. (2016). Diseño textil: tejidos y técnicas (2a. ed.). Editorial Gustavo Gili.",link:"https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/45593"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Líder del equipo",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de línea de producción",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Paola Angélica Castro Salazar",cargo:"Experta temática",centro:"Centro Regional Antioquia"},{nombre:"Ledy Johana Velásquez Hernández",cargo:"Experta temática",centro:"Centro Regional Antioquia"},{nombre:"María Camila Álvarez Trujillo",cargo:"Experta temática",centro:"Centro Regional Antioquia"},{nombre:"Vilma Perilla Méndez",cargo:"Diseñadora Instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Carolina Coca Salazar",cargo:"Revisión metodológica y pedagógica",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Darío González",cargo:"Corrección de estilo",centro:"Centro Agropecuario La Granja - Regional Tolima"},{nombre:"Fabián Leonardo Correa Díaz",cargo:"Diseñador Instruccional",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander "}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Blanco Flor Tinoco Torres",cargo:"Diseñador de Contenidos Digitales ",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Desarrollador Fullstack ",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Carmen Alicia Martinez Torres ",cargo:"Animador y Productor Multimedia",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Camilo Andrés Bolaño Rey",cargo:"Locución",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Zuleidy María Ruiz Torres",cargo:"Validador de Recursos Educativos Digitales ",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Validador de Recursos Educativos Digitales ",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para Contenidos Inclusivos y Accesibles ",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});n["a"].prototype.$config=v;var k=o("9224");n["a"].prototype.$package=k,new n["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"6bea":function(e,a,o){e.exports=o.p+"img/a3.4263294e.svg"},"74b5":function(e,a,o){e.exports=o.p+"img/banner-princiapal.7a8bca8c.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,o){},c73a:function(e,a,o){e.exports=o.p+"img/a4.473f15f9.svg"},ce7c:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.a7452c29.png"}});
//# sourceMappingURL=app.422a963f.js.map