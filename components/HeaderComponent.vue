<template>

<div>
  <div class="top_nav container-fluid  row navbar navbar-expand-lg" id="navbarSupportedContent">
    <div class="col-lg-5 phone_section">
      <ul class="navbar-nav ">
        <li class="nav-item"><a href="javascript:void(0)" class=" nav-link"><i class=" fa fa-phone" aria-hidden="true"></i> Call +01 1234567890</a></li>
      </ul>
    </div>
    <div class="col-lg-4 h4 col-md-12 col-sm-12  icon_section">
      <ul class="navbar-nav icon_nav">
        <li v-for="item in getSocial" :key="item.id"><a :href="item.link" class="nav-link a_icon"><i :class="item.title"></i></a></li>
      </ul>
    </div>
  </div>


  <div class="modal fade" id="staticBackdrop">
    <div class="modal-dialog">
      <div class="modal-content">
        <div id="mySidepanel" class="sidepanel " style="width: 250px;">
          <button type="button" class="btn-close  modal-content bg-transparent border-0" data-bs-dismiss="modal" aria-label="Close"></button>
          <nuxt-link to="/" >Home</nuxt-link>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/services">Services</nuxt-link>
          <nuxt-link to="/blogs">Blogs</nuxt-link>
          <nuxt-link to="/contact">Contact Us</nuxt-link>
          <nuxt-link to="/privacy" >Privacy </nuxt-link>
          <nuxt-link to="/terms" >Terms</nuxt-link>
        </div>
      </div>
    </div>

  </div>

  <div class="container-fluid mt-3">
    <div class="row">
      <div class="furherd col-lg-10 col-sm-8">
        <div class="logo">
          <nuxt-link to="/" class="h3 text-decoration-none">Fur<span>Herd</span></nuxt-link>
        </div>
      </div>
      <div class="col-lg-1  col-sm-2 text-center">
        <ul class=" navbar-nav">
          <li class="nav-item col-lg-2 top_search"><a href="javascript:void(0)" class="nav-link h5 search"><i class="fa fa-search" aria-hidden="true"></i></a></li>
        </ul>
      </div>
      <div class="col-lg-1  col-sm-2 menu_btn ">
        <ul class=" navbar-nav">
          <li class="nav-item col-lg-3 col-sm-2 ">
            <button type="button" class="btn top_bar" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <img src="/images/menu_btn.png" >
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>

</div>
</template>
<script>
import {mapGetters} from "vuex";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";

export default {
  name:'index',
  async beforeMount() {
    await this.$store.dispatch('getSetting')
  },

  computed: {
    ...mapGetters(['getSocial'])
  }
}
</script>

