<template>
  <div class="services mt-5 mb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage pb-5 text-center">
            <h2>
              <ul class="breadcrumb">
                <li class="breadcrumb-item "><nuxt-link to="/services" class="text-decoration-none">Services</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{data.title}}</li>
              </ul>
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="service_text p-5 text-center mt-5 position-relative">
            <i><img :src="data.image" :alt="data.title"/></i>
            <h3>{{data.title}}</h3>
            <p>{{data.descriptions}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  layout:'blog',
  async  asyncData({app, params}) {
    try {
      let {data} = await app.$axios.get(`/services/${params.id}`);
      return {data: data.data};
    } catch (error) {
      console.log('Could not fetch single services, in detail page.', error);
    }//..... end of try-catch() .....//
  },


  data() {
    return {
      data: {},
    }
  }
}
</script>
