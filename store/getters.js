import {state} from "./index";

const getters = {

  getDashBlog(state) {
    return state.dash_blog;
  },

  getDashHeader(state) {
    return state.dash_header;
  },

  getDashServices(state) {
    return state.dash_services;
  },

  getDashAbout(state) {
    return state.dash_about;
  },

  getAboutDescription(state) {
    return state.about_description;
  },
 getRecentPosts(state) {
    return state.recent_posts;
  },


 getSocial(state) {
    return state.social;
  },

 getAddress(state) {
    return state.address;
  },

  getAbout(state) {
    return state.about;
  },

  getServices(state) {
    return state.services;
  },

  getBlog(state) {
    return state.blog;
  },

  getServicesDetail(state) {
    return state.services_detail;
  },


}

export default getters
