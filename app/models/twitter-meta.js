import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    title: attr(),
    description: attr(),
    author: attr(),
    image: attr(),
    url: attr(),
});
