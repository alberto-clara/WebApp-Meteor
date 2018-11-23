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
      placeholder: 'John',
    },
  },
  last: {
    label: 'Last',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Stuff',
      placeholder: 'Test',
    },
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 100,
    autoform: {
      group: 'Stuff',
      placeholder: '123 Lane St. HiddenVille, IDK. 123456',
    },
  },
  phone: {
    label: 'Phone',
    type: String,
    optional: false,
    max: 15,
    autoform: {
      group: 'Stuff',
      placeholder: '360-000-0000',
    },
  },
  email: {
    label: 'Email',
    type: String,
    optional: false,
    max: 30,
    autoform: {
      group: 'Stuff',
      placeholder: 'john.test@email.com',
    },
  },
});

Stuff.attachSchema(StuffSchema);
