<template>
<div>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class=" banner_main w-100 ">
            <div class="bluid text-center pt-5 position-relative" v-for="item in getDashHeader" :key="item.id">
              <h1 class="mt-5">{{item.title}}</h1>
              <p>{{item.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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
        <div class="col-md-4" v-for="item in getDashServices" :key="item.id">
          <div class="service_text p-5 text-center mt-5 position-relative" >
            <i><img :src="item.image" alt="#"/></i>
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
            <nuxt-link :to="`/services/${item.id}`" class="nav-link">Read More</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div  class="pet">
    <div class="container">
      <div class="row d_flex">
        <div class="col-md-6" v-for="item in getDashAbout" :key="item.id">
          <div class="titlepage" >
            <span>{{item.title}}</span>
            <p class="text-light w-75">{{item.description}} </p>
            <nuxt-link class="read_more nav-link text-light" to="/about">Contact Us</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>




  <div class="choose">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text-center mt-5">
            <h2 class=" position-relative">Why Choose Us</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="item in getDashBlog" :key="item.id">
          <div class="teab_box mt-5">
            <span class="d-block">0{{item.id}}</span>
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
            <nuxt-link :to="`/blogs/${item.id}`" class="nav-link text-dark">Read More</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact mt-5">
    <div class="container">
      <div class="row ">
        <div class="col-md-12">
          <div class="titlepage text-center mb-5">
            <h2>Get In Touch</h2>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <form id="request" class="main_form">
            <div class="row">
              <div class="col-md-12 ">
                <input class="contactus fw-normal w-100 h-75 mb-5" placeholder="Name" type="type" name=" Name">
              </div>
              <div class="col-md-12">
                <input class="contactus fw-normal w-100 h-75 mb-5 " placeholder="Phone number" type="type" name="Phone Number">
              </div>
              <div class="col-md-12">
                <input class="contactus fw-normal w-100 h-75 mb-5" placeholder="Email Address" type="type" name="Email">
              </div>
              <div class="col-md-12">
                <textarea class="textarea w-100 mb-4 fw-normal" placeholder="Message" type="type" ></textarea>
              </div>
              <div class="col-md-12">
                <button class="send_btn btn bg-dark text-light text-center">Send</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
          <div class="mt-5 mb-5">
            <div class="responsive-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
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
  layout:'blog',
  components: {HeaderComponent, FooterComponent},
  async mounted() {
  await this.$store.dispatch('getDashboard')
  },
  async beforeMount() {
  await this.$store.dispatch('getSetting')
  },

  computed: {
  ...mapGetters(['getDashAbout','getDashHeader','getDashServices','getDashBlog'])
  }
}
</script>
