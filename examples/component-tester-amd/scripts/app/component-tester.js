define(['knockout', 'components/ComponentViewModel-amd'], function(ko, ComponentViewModel){
    ko.components.register('test-component', { require: 'components/ComponentViewModel-amd' });
    
    ko.applyBindings();

    
});