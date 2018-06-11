<template>
  <div id="app">
    <Navbar />

    <Tabber :tab-selected="tabSelected" @change-tab="tabSelected = $event" />

    <Carousel />

    <Balls />

    <Highlights :highlights="highlights" />

    <Categories :categories="categories" />

    <Featureds :featureds="featureds" />
  </div>
</template>

<script>
import http from './support/http'

export default {
  name: 'App',

  components: { 
    Navbar: () => import('./components/Navbar'),
    Tabber: () => import('./components/Tabber'),
    Carousel: () => import('./components/Carousel'),
    Balls: () => import('./components/Balls'),
    Highlights: () => import('./components/Highlights'),
    Categories: () => import('./components/Categories'),
    Featureds: () => import('./components/Featureds'),
  },

  data () {
    return {
      tabSelected: true,
      highlights: [],
      categories: [
        { id: 1, title: 'Esportes', description: 'Tênis e roupas de corrida com 30% off' },
        { id: 2, title: 'Eletrônicos', description: 'Celulares com até 20% off' }
      ],
      featureds: [
        { 
          id: 1, 
          title: 'Title-01', 
          description: 'They shut down the main reactor', 
          image: 'http://site.vetorizar.com/wp-content/uploads/2015/10/simbolosesportes763.gif' 
        },
        { 
          id: 2, 
          title: 'Title-02', 
          description: 'They shut down the main reactor', 
          image: 'https://www.jornalcontabil.com.br/wp-content/uploads/2017/02/586x285-eletro-eletronicos_tcm909-141276.jpg' 
        }
      ]
    }
  },

  mounted () {
    // ao montar o componente,
    // executo o método que pega os dados na api
    // e atribuo os valores no meu estado inicial chamado highlights
    this.getHighlights()
  },

  methods: {
    // pego na api os destaques
    async getHighlights () {
      const { data } = await http.get()

      // seto no meu estado inicial
      this.highlights = data
    }
  }
}
</script>
