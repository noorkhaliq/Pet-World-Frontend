export default  {
  async getDashboard({commit}) {
    try {
      let {data} = await this.$axios.get(`/dashboard`);
      commit('SET_DASHBOARD_BLOGS', data.blog);
      commit('SET_DASHBOARD_AB0UT', data.about);
      commit('SET_DASHBOARD_HEADER', data.header);
      commit('SET_DASHBOARD_SERVICES', data.services);
    } catch (error) {
      console.log('Error: Error occurred while fetching for dashboard.', error)
    }//.... end of try-catch() .....//
  },

  async getSetting({commit}) {
    try {
      let {data} = await this.$axios.get(`/settings`);
      commit('SET_SOCIAL', data.social);
      commit('SET_ADDRESS', data.address);
    } catch (error) {
      console.log('Error: Error occurred while fetching settings for dashboard.', error)
    }//.... end of try-catch() .....//
  },

  async getAbout({commit}) {
    try {
      let {data} = await this.$axios.get(`/about`);
      commit('SET_ABOUT', data);
    } catch (error) {
      console.log('Error: Error occurred while fetching about for dashboard.', error)
    }//.... end of try-catch() .....//
  },

  async SetAboutDescription({commit}) {
    try {
      let {data} = await this.$axios.get(`/about-description`);
      commit('SET_AB0UT_DESCRIPTION', data.about_description);
      commit('SET_RECENT_POSTS', data.recent_posts);
    } catch (error) {
      console.log('Error: Error occurred while fetching about description and recent posts title for dashboard.', error)
    }//.... end of try-catch() .....//
  },



  async getServices({commit},{page}) {
    try {
      let {data} = await this.$axios.get(`/services?page=${page}`);
      commit('SET_SERVICES', data);
    } catch (error) {
      console.log('Error: Error occurred while fetching page for services page.', error)
    }//.... end of try-catch() .....//
  },

  async getBlog({commit},{page}) {
    try {
      let {data} = await this.$axios.get(`/blog?page=${page}`);
      commit('SET_BLOG', data);
    } catch (error) {
      console.log('Error: Error occurred while fetching blogs for dashboard.', error)
    }//.... end of try-catch() .....//
  },


}
