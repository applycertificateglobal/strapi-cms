'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/bookings',
      handler: 'booking.find',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/bookings/:id',
      handler: 'booking.findOne',
      config: {
        policies: [],
      },
    },
    {
      method: 'POST',
      path: '/bookings',
      handler: 'booking.create',
      config: {
        policies: [],
      },
    },
  ],
};
