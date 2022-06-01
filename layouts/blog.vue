<template>
 <div>
   <HeaderComponent/>



   <!-- header section end -->
   <Nuxt />
   <FooterComponent/>
 </div>
</template>
<script>
import FooterComponent from "../components/FooterComponent";
import {mapGetters} from "vuex";
import HeaderComponent from "../components/HeaderComponent";
export default  {
  // name:'default',
  components: {HeaderComponent, FooterComponent},
  async beforeMount() {
    await this.$store.dispatch('getSetting')
  },

  computed: {
    ...mapGetters(['getSocial'])
  }
}
</script>
