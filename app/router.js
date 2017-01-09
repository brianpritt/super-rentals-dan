import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contacts');
  this.route('announcement');
  this.route('announcements');
});

export default Router;
