<template>
  <div class="container"> <!-- for some reason if you do not put an outer container div this component template will not render -->
    <div class="columns large-3 medium-6" v-for="store in stores">
      <div class="card">
        <div class="card-divider">
          {{ store.name }}
        </div>
        <a :href="store.image_url" target="_blank"><img :src="store.image_url"></a>
        <div class="card-section">
          <p>{{ store.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  define(["Vue"], function(Vue) {
    return Vue.component("stores-component", {
      template: template, // the variable template will be injected
      computed: {
        stores () {
          return this.$store.getters.processedStores;
        }
      }
    });
  });
</script>