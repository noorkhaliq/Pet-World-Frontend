<template>
  <div class="services mt-5 mb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage pb-5 text-center">
            <h2>Services we offer</h2>
            <p>English. Many desktop publishing packages and web page editors</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="item in getServices.data" :key="item.id">
          <div class="service_text p-5 text-center mt-5 position-relative">
            <i><img :src="item.image" alt="#"/></i>
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
            <nuxt-link :to="`/services/${item.id}`" class="nav-link">Read More</nuxt-link>
          </div>
        </div>
      </div>
      <nav class="text-center mt-3 mb-4">
        <client-only>
          <pagination :data="getServices" class="pagination-main" @pagination-change-page="pageChanged" show-disabled :limit="3">
            <span slot="prev-nav">previous</span>
            <span slot="next-nav">next</span>
          </pagination>
        </client-only>
      </nav>
    </div>




  </div>





</template>

<script>
import {mapGetters} from "vuex";

export default  {
  layout:'blog',
   mounted() {
    this.$store.dispatch('getServices');
   this.loadData()
  },
  computed:{
    ...mapGetters(['getServices'])
  },
  methods:{
    pageChanged(page) {
      this.loadData(page);
    },

    loadData(page = 1) {
      this.$store.dispatch('getServices', {page});
    },
  }
}
</script>
