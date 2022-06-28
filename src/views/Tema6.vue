<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero.colr_3
        span 6
      h1 Plan promocional, actividades y materiales
    
    .row.justify-center.mb-5(data-aos="zoom-in-up")
      .col-12.col-lg-10
        .bloque-texto-g.bgr_6.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.pst_1(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/t6-1.png')})`}"
          )
          .bloque-texto-g__texto.pst_4.p-4.p-lg-5
            p.mb-0 El plan promocional debe lograr objetivos de corto plazo simples, medibles y evaluables, tales como incrementar ventas o realizar una actividad específica por parte del cliente. Para conocer ejemplos de planes promocionales revise con atención el siguiente recurso. 
    
    h3.justify-center.mb-5 Planes promocionales 

    .row.mb-5.justify-center
      .col-12.col-lg-10
        figure.mb-5(data-aos="zoom-in-down")
          img(src='@/assets/curso/tema6/t6-2.svg', alt='Texto que describa la imagen')

    p.mb-5 Los objetivos principales para crear un plan promocional son:

    .row.mb-5.justify-center
      .col-12.col-lg-10
        figure.mb-5
          img(src='@/assets/curso/tema6/t6-3.svg', alt='Texto que describa la imagen')

    p.mb-5 Para realizar un plan promocional hay que tener en claro los objetivos de la promoción y las estrategias a realizar; los principales pasos a seguir son:

    .bg_grad-07(data-aos="zoom-in-down")
      LineaTiempoE.color-acento-contenido
        .row(titulo="01" subtitulo="Objetivos de la promoción")
          .col-lg-12.mb-4.mb-lg-0
            p #[strong Convertir:] conseguir que los clientes que compran sus productos o servicios a la competencia, se conviertan en nuestros compradores. 
            p #[strong Atraer:] a los compradores de productos o servicios de otros sectores para que se sientan atraídos por los nuestros. 
            p #[strong Retener:] fidelizar al cliente.
            p #[strong Alimentar:] lograr que los clientes consuman con más frecuencia nuestros productos o servicios.
            p #[strong Enfoque táctico de los objetivos]
            ul.lista-ul--color
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Realizar más ventas.
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Lanzar nuevos productos o servicios.
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                span Dar salida al exceso de <em>stock.</em>
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Obtener liquidez a corto plazo.
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Crear barreras a la competencia.
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Ganarse la confianza de un distribuidor.
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Generar BDD (estrategia de desarrollo dirigida por comportamiento)
        .row(titulo="02" subtitulo="Definir target (objetivo)")
          .col-lg-12.mb-4.mb-lg-0
            p #[strong Canal:] identificar los mejores canales para la promoción del producto o servicio, entre otros están el Internet, el email, canal tradicional, mayoristas, minoristas, etc.
            p #[strong Red de ventas:] definir si serán las propias o externas.
            p #[strong Proveedores:] quienes van a suministrar el producto terminado o la materia prima.
            p #[strong Consumidor final:] segmentar el mercado, pymes, hombres, mujeres, niños, etc.
        .row(titulo="03" subtitulo="Presupuesto")
          .col-lg-12.mb-4.mb-lg-0
            p El presupuesto debe definirse en tres criterios, el primero es los recursos con los que cuenta la empresa, el segundo teniendo en cuenta el porcentaje (%) de las ventas proyectadas y el tercero está en función de la competencia y sus gastos.
            .cajon.bgr_25.p-5.mb-4
              p.mb-0 El presupuesto debe obedecer a la realidad y debe coincidir con los objetivos, por ejemplo, si la previsión es optimista y el presupuesto ajustado no se considera realista.  
        .row(titulo="04" subtitulo="Timing (tiempo)")
          .col-lg-12.mb-4.mb-lg-0
            p En el plan promocional se debe planear la fecha de la campaña y por cuánto tiempo va a durar en el punto de venta, también hay que crear un calendario de actividades.  
        .row(titulo="05" subtitulo="Mecánica, soportes e incentivos")
          .col-lg-12.mb-4.mb-lg-0
            p En este punto se debe especificar el tipo de promoción que se va a realizar en la campaña, por ejemplo, si van a ser sorteos, regalos, descuentos, bonos, etc. 
            p El soporte se refiere al canal de comunicación seleccionado para la promoción, por ejemplo, si es el mismo producto (<em>packaging:</em> en el mismo empaque), en el punto de venta (<em>online/offline:</em> promoción por internet), redes sociales, etc. 
        .row(titulo="06" subtitulo="Creatividad")
          .col-lg-12.mb-4.mb-lg-0
            p En este punto de deben tener en cuenta los siguientes aspectos:
            ul.lista-ul--color
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Periodo promocional (fecha inicial y fecha final de la promoción).
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Quién puede participar (clientes inscritos en la base de datos o los clientes en general).
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Fecha de sorteo (día en el que se va a sortear el carro, nevera, etc.).
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Cláusula protección de datos (de los clientes que se encuentran en su base de datos).
              li.mb-4
                i.fas.fa-paper-plane.colr_1
                | Premios (descuentos, bonos, promociones, regalos, etc.).
        .row(titulo="07" subtitulo="Test")
          .col-lg-12.mb-4.mb-lg-0
            p Al finalizar la campaña promocional se debe hacer un sondeo aleatorio o se debe aplicar una encuesta para verificar el éxito de la promoción. Los responsables del plan promocional del formato comercial deben presentar un informe del logro de los objetivos propuestos y de la medición de los resultados.
        
</template>

<script>
export default {
  name: 'Tema6',
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
