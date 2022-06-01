<template>
  <div class="choose">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="titlepage text-center mt-5">
            <h2 class=" position-relative">
              <ul class="breadcrumb">
                <li class="breadcrumb-item "><nuxt-link to="/blogs" class="text-decoration-none" >Blog</nuxt-link></li>
                <li class="breadcrumb-item active" aria-current="page">{{data.title}}</li>
              </ul>
            </h2>
          </div>
        </div>
      </div>
      <div class="row">

        <div class="col-lg-12 col-md-12">
          <div class="teab_box mt-5">
            <span class="d-block">0{{data.id}}</span>
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
      let {data} = await app.$axios.get(`/blog/${params.id}`);
      return {data: data.data};
    } catch (error) {
      console.log('Could not fetch single blogs, in detail page.', error);
    }//..... end of try-catch() .....//
  },


  data() {
    return {
      data: {},
    }
  }
}
</script>
