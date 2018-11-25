import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';


/* eslint-disable object-shorthand */

Template.If_Logged_In.helpers({
  /**
   * @returns {*} True if Meteor is in the process of logging in.
   */
  authInProcess: function authInProcess() {
    return Meteor.loggingIn();
  },
  /**
   * @returns {boolean} True if there is a logged in user.
   */
  canShow: function canShow() {
    return !!Meteor.user();
  },

  stuffList() {
    return Stuff.find();
  },
});
