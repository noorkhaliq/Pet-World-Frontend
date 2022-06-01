import actions from '~/store/actions';
import mutations from '~/store/mutations';
import getters from '~/store/getters';

/**
 * State of the store.
 */
const state = () => ({
  dash_header : {},
  dash_about : {},
  dash_blog : {},
  dash_services : {},
  social:{},
  address:{},

  about_description:{},
  recent_posts:{},

  // sub page
  about: {},
  services:{},
  services_detail:{},
  blog:{}
});

export {state, getters, mutations, actions};


