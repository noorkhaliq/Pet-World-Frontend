export default {
  SET_DASHBOARD_BLOGS(store, data) {
    store.dash_blog = data.data;
  },

  SET_DASHBOARD_AB0UT(store, data) {
    store.dash_about = data.data;
  },


 SET_AB0UT_DESCRIPTION(store, data) {
    store.about_description = data.data;
  },
 SET_RECENT_POSTS(store, data) {
    store.recent_posts = data.data;
  },

  SET_DASHBOARD_SERVICES(store, data) {
    store.dash_services = data.data;
  },

  SET_DASHBOARD_HEADER(store, data) {
    store.dash_header = data.data;
  },

  SET_SOCIAL(store, data) {
    store.social = data.data;
  },

  SET_ADDRESS(store, data) {
    store.address = data.data;
  },

 SET_ABOUT(store, data) {
    store.about = data.data;
  },

 SET_SERVICES(store, data) {
    store.services = data;
  },

  SET_BLOG(store, data) {
    store.blog = data;
  },



}
