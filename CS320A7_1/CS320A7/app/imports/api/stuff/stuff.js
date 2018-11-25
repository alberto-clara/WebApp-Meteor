import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Stuff = new Mongo.Collection('Stuff');

/**
 * Create the schema for Stuff
 */
export const StuffSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'First Name',
    },
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'Last Name',
    },
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 100,
    autoform: {
      group: 'Stuff',
      placeholder: 'Address',
    },
  },
  phone: {
    label: 'Phone',
    type: String,
    optional: false,
    max: 15,
    autoform: {
      group: 'Stuff',
      placeholder: 'Telephone',
    },
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 30,
    autoform: {
      group: 'Stuff',
      placeholder: 'Email',
    },
  },
});

Stuff.attachSchema(StuffSchema);
