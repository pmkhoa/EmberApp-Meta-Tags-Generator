import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    siteTitle: attr(),
    keywords: attr(),
    url: attr(),
    description: attr(),
    image: attr()
});
