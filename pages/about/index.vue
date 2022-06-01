<template>
<div>
  <!-- about section start --><div  class="pet">
    <div class="container">
      <div class="row d_flex ">
        <div class="col-md-6">
          <div class="titlepage" v-for="item in getAbout" :key="item.id">
            <span>{{item.title}}</span>
            <p class="text-light">{{item.description}}</p>
            <nuxt-link class="read_more nav-link text-light" to="/contact">Contact Us</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- about section end -->
</div>
</template>
<script>
import {mapGetters} from "vuex";

export default  {
  layout: 'blog',

 async mounted() {
    await this.$store.dispatch('getAbout')
  },

  computed :{
    ...mapGetters(['getAbout'])
  }

}
</script>
