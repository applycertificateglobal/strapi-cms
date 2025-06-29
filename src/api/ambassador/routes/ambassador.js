'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ambassadors',
      handler: 'ambassador.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/ambassadors/:id',
      handler: 'ambassador.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/ambassadors',
      handler: 'ambassador.create',
      config: {
        policies: [],
      },
    },
  ],
};
