define([], function () {
  return [
    {
      path:'/',
      component: view('home')
    },
    {
      path:'/stores',
      component: view('stores')
    },
    {
      path: '/404',
      component: view('notfoundcomponent')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]

  /**
   * Asynchronously load view (lazy-loading)
   * @param {string} name the filename (basename) of the view to load.
   */
  function view(name) {
    return function(resolve) {
      require(['vue!' + name + '.vue'], resolve);
    }
  };
});
