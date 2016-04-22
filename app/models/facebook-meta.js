import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    title: attr(),
    siteName: attr(),
    url: attr(),
    image: attr(),
    locale: attr(),
    appId: attr(),
    description: attr()
});
