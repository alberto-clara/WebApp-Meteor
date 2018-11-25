import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  first: {
    label: 'First',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'first',
    },
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    autoform: {
      group: 'Stuff',
      placeholder: 'last',
    },
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    autoform: {
      group: 'Stuff',
      placeholder: 'address',
    },
  },
  phone: {
    label: 'Phone',
    type: String,
    optional: false,
    autoform: {
      group: 'Stuff',
      placeholder: 'phone',
    },
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    autoform: {
      group: 'Stuff',
      placeholder: 'email',
    },
  },

});

Stuff.attachSchema(StuffSchema);
