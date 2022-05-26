<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Todas las empresas que quieran tener éxito en su negocio deben implementar estrategias para la exhibición de su mercancía, desde esta perspectiva resulta fundamental conocer los medios y los elementos con lo que se dispone para realizar dicha tareas, la cual va a permitir obtener  beneficios significativos para todos los miembros de una organización, desde esta perspectiva, el objetivo principal de este espacio de formación es dar a conocer los mecanismos necesarios que un empresario puede utilizar para dar a conocer al usuario sus productos y servicios y ser competitivo en el mercado. 
    p.mb-5 Sabiendo esto y para una breve revisión de los temas vistos, puede observar el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
