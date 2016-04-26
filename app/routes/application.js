import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            standardTags: this.store.createRecord('standard-meta'),
            facebookTags: this.store.createRecord('facebook-meta'),
            twitterTags: this.store.createRecord('twitter-meta'),
            googleTags: this.store.createRecord('google-plus-meta'),
        });
    },

    setupController(controller, models) {
        controller.set('standardTags', models.standardTags);
        controller.set('facebookTags', models.facebookTags);
        controller.set('twitterTags', models.twitterTags);
        controller.set('googleTags', models.googleTags);
    },

    notifyGoogleAnalytics: function() {
        return ga('send', 'pageview', {
            'page': this.get('url'),
            'title': this.get('url')
        });
    }.on('didTransition')
});
