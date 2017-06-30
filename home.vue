<template>
  <div class="row">
    <div class="large-6 columns">
        <h1>nboor1s</h1>
      <h1>{{title}}</h1>
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
  define(["Vue"], function(Vue) {
    return Vue.component("home-component", {
      template: template, // the variable template will be injected
      data: function() {
        return {
          title: "MM with Vue.js!",
          description: "An example of integration of Mall Maverick with Vue.js"
        }
      }
    })
  })
</script>
