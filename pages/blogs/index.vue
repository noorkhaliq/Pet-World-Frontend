<template>

  <!-- blogs section start -->
  <div class="choose ">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text-center mt-5">
            <h2 class=" position-relative">Our Blogs</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="item in getBlog.data" :key="item.id">
          <div class="teab_box mt-5">
            <span class="d-block">0{{item.id}}</span>
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
            <nuxt-link :to="`blogs/${item.id}`" class="nav-link text-dark mb-5">Read More</nuxt-link>
          </div>
        </div>
      </div>
      <nav class="text-center mt-3 mb-4">
        <client-only>
          <pagination :data="getBlog" class="pagination-main" @pagination-change-page="pageChanged" show-disabled :limit="3">
            <span slot="prev-nav">previous</span>
            <span slot="next-nav">next</span>
          </pagination>
        </client-only>
      </nav>
    </div>


  </div>



  <!-- blogs section end -->
</template>

<script>
import {mapGetters} from "vuex";

export default  {
  layout: 'blog',


  mounted() {
    this.$store.dispatch('getBlog');
    this.loadData()
  },
  computed:{
    ...mapGetters(['getBlog'])
  },
  methods:{
    pageChanged(page) {
      this.loadData(page);
    },

    loadData(page = 1) {
      this.$store.dispatch('getBlog', {page});
    },
  }
}
</script>
