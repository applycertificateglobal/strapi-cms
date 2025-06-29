'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/universities',
      handler: 'university.find',
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/universities/:id',
      handler: 'university.findOne',
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
