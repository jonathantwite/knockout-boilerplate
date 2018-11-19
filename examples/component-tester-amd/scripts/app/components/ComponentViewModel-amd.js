define(['knockout', 'text!./component-template.html'], function (ko, htmlTemplate) {
    var ViewModel  = function (params) {
        var self = this;
        
        //#region Public Observables
        self.isEditable = params.controlIsEditable;
        
        self.isVisible = ko.observable(false);
        self.status = ko.pureComputed(function() {
            return (self.isVisible() ? 'visible' : 'hidden') + ' and ' + (ko.unwrap(self.isEditable) ? 'editable' : 'readonly');
        });
        //#endregion
        
        //#region Private variables
        var internalValue = 42;
        //#endregion
        
        //#region Public functions
        self.setVisible = function(visible) {
            self.isVisible(visible);
        };
        //#endregion
        
        //#region Private functions
        function strLength(str) {
            return str.length;
        };
        //#endregion
        
        //#region Subscriptions
        self.isVisibleSubscription = self.isVisible.subscribe(function(newValue) {
            internalValue = newValue ? 12 : 42;
        });
        //#endregion
        
        //#region Disposal
        self.dispose = function() {
            self.isVisibleSubscription.dispose();
        };
        //#endregion
        
        //#region Initialisation
        self.isVisible(internalValue === strLength('start'));
        //#endregion
    }
    
    return { viewModel: ViewModel, template: htmlTemplate };
});
