import DS from 'ember-data';

var ClaimResponseItemAdjudicationComponent = DS.Model.extend({
    code: DS.belongsTo('coding', {embedded: true}),
    amount: DS.belongsTo('quantity', {embedded: true}),
    value: DS.attr('number')
});
export default ClaimResponseItemAdjudicationComponent;
