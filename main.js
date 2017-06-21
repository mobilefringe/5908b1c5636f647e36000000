require.config({
  paths: {
    'Vue': 'https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue',
    'vue_router': 'https://cdnjs.cloudflare.com/ajax/libs/vue-router/2.5.2/vue-router.min',
    'axios': 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.16.1/axios.min',
    'jquery': 'https://code.jquery.com/jquery-3.2.1.min',
    'moment': 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment-with-locales.min',
    'vue2-filters': 'https://cdn.jsdelivr.net/vue2-filters/0.1.8/vue2-filters.min',
    'vue': 'https://cdn.rawgit.com/edgardleal/require-vuejs/master/dist/require-vuejs.min',
    'vuex': 'https://cdnjs.cloudflare.com/ajax/libs/vuex/2.3.1/vuex.min'
  }
});

require(['Vue', 'vuex', 'vue_router', 'axios', 'jquery', 'vue2-filters', 'routes'], function (Vue, Vuex, VueRouter, axios, $, Vue2Filters, AppRoutes) {
  Vue.use(Vuex);
  Vue.use(VueRouter);
  Vue.use(Vue2Filters);

  const store = new Vuex.Store({
    state: {
      results: []
    },
    actions: {
      LOAD_MALL_DATA: function ({ commit }) {
        axios.post('/api/v1/get_mall_data', {
          version: 'v4',
          endpoint: 'all',
          property: 'halifaxcentre'
        })
        .then(function (response) {
          commit('SET_MALL_DATA', { list: response.data })
        })
        .catch(function (error) {
          console.log("Data load error: " + error.message);
        });
      }
    },
    mutations: {
      SET_MALL_DATA: (state, { list }) => {
        state.results = list
      }
    },
    getters: {
      processedStores: state => {
        try {
          let stores = state.results.stores;
          // Add image_url attribute with CDN link
          stores.map(store => {
            store.image_url = "https://mallmaverick.cdn.speedyrails.net" + store.store_front_url;
          });
          return stores;
        }
        catch (err) {
          return [];
        }
      }
    },
    modules: {

    }
  });

  const router = new VueRouter({
    mode: 'history',
    routes: AppRoutes
  });

  const vm = new Vue({
    el: '#app',
    data: {

    },
    mounted() {
      this.$store.dispatch('LOAD_MALL_DATA');
    },
    router: router,
    store
  });
});
