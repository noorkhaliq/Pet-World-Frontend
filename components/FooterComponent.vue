<template>
  <div>
    <footer class="mt-5 ">
      <div class="footer mb-5 navbar-expand-lg">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 foot_headers">
              <h3>About</h3>
              <p v-for="item in getAboutDescription" :key="item.id">{{item.description}}</p>
              <ul class="conta navbar-nav" >
                <li v-for="item in getAddress" :key="item.id"> <a :href="item.link"><i><img :src="item.image" :alt="item.title"/></i></a>{{item.title}}</li>
             </ul>
              <ul class="social_icon  navbar-nav text-center">
                <li v-for="item in getSocial" :key="item.id"> <a :href="item.link"><i :class="item.title"></i></a></li>
              </ul>
            </div>

            <div class="col-lg-2 foot_headers">
              <h3>Menus</h3>
              <ul class="list-unstyled">
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/services">Services</nuxt-link></li>
                <li><nuxt-link to="/blogs">Blogs</nuxt-link></li>
                <li><nuxt-link to="/contact" >Contact Us</nuxt-link></li>
                <li><nuxt-link to="/privacy" >Privacy </nuxt-link></li>
                <li ><nuxt-link to="/terms" >Terms</nuxt-link></li>
              </ul>
            </div>
            <div class="col-lg-2 foot_headers">
              <h3>Recent Posts</h3>
              <ul class="footer_menu list-unstyled">
                <li v-for="item in getRecentPosts" :key="item.id"><nuxt-link :to="`/blogs/${item.id}`">{{item.title}} </nuxt-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!--        terms and privacy section-->
      <div class="container-fluid term text-light">
        <div class="container">
          <div class="row ">
            <div class="col-md-10 mt-3 footer_p">
              <p>© 2022 All Rights Reserved.  Noor Html Template</p>

            </div>
            <div class="col-md-2 mt-3 ">
              <ul class="navbar  text-decoration-none list-unstyled">
                <nuxt-link to="/terms">
                  <li style="margin-left: -19px;color: white"> Terms Conditions</li>
                </nuxt-link>
                <nuxt-link to="/privacy">
                  <li class="text-light ms-2"> Privacy</li>
                </nuxt-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>
<script>
import {mapGetters} from "vuex";

export default  {
  name: 'FooterComponent',
  async beforeMount() {
    await this.$store.dispatch('getSetting')
    await this.$store.dispatch('SetAboutDescription')
  },

  computed :{
    ...mapGetters(['getAddress','getSocial','getAboutDescription','getRecentPosts'])
  }
}
</script>
