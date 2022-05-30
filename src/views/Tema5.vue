<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 5
      h1 Mobiliario, funcionalidad
    
    p El mobiliario es muy importante porque contribuye en la gestión comercial y posiciona la imagen de las marcas, son el factor principal en la diferencia con la competencia.
    p.mb-5 Las siguientes son las ventajas que un establecimiento puede tener si usa estratégicamente el mobiliario:

    .row.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/t5-1.png', alt='Texto que describa la imagen')
      .col-12.col-lg-8(data-aos="fade-left")
        ul.lista-ul--color
          li.mb-4
            i.fas.fa-paper-plane
            | Invita a los clientes al establecimiento ayudando en la elección del punto de venta como su lugar de compra favorito.
          li.mb-4 
            i.fas.fa-paper-plane
            | Orienta a los clientes dentro del establecimiento facilitando la compra de artículos porque tiene ordenado el surtido y dividido según el tipo de producto.
          li.mb-4 
            i.fas.fa-paper-plane
            | Fideliza a los clientes, generando comportamientos positivos, además de un compromiso de compra.
          li.mb-4 
            i.fas.fa-paper-plane
            | Entrega un alto valor a los artículos porque mejora su exhibición de cara a los clientes.
          li.mb-4 
            i.fas.fa-paper-plane
            | Provoca en los clientes una mejor experiencia de compra al tener un impactante diseño y una excelente distribución del mobiliario comercial. 
     
    .row.mb-5.justify-center(data-aos="zoom-in-up")
      .col-12.col-lg-10  
        .cajon.bgr_21.p-4.mb-4
          .row  
            .col-12.col-lg-2.mb-3.mb-lg-0
              figure.justify-center
                img.img100(src='@/assets/curso/tema5/t5-2.svg', alt='Texto que describa la imagen')
            .col-12.col-lg-8.align-items-center
              div
                p.text-bold.mb-0 Recuerde que:
                p.mb-0  El principal objetivo del mobiliario es brindar y disponer de los productos, cautivar y llamar la atención del cliente y motivarlos a una acción de comprar.
    
    .row.mb-5(data-aos="fade-right")
      .col-10.col-lg-4.position-relative
        h3.p-3.bgr_2.text-center Tipo de muebles
        img.pst(src='@/assets/curso/tema5/t5-3.svg' alt='AvatarTop')
      
    p.mb-5 Los formatos comerciales cuentan con diferentes tipos de muebles, tanto para la exhibición de la mercancía como para atender los diferentes servicios que les prestan a sus clientes, para conocerlos revise el recurso educativo propuesto:

    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

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

<style lang="sass"></style>
