import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    siteTitle: attr("string"),
    keywords: attr("string"),
    description: attr("string"),
});
