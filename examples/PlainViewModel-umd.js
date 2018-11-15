(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['knockout'], factory);
    } else {
        // Browser globals
        root.PlainViewModel = factory(root.ko);
    }
}(typeof self !== 'undefined' ? self : this, function (ko) {
    var ViewModel = function() {
        var self = this;
        
        //#region Public Observables
        self.isVisible = ko.observable(false);
        self.status = ko.pureComputed(function() {
            return self.isVisible() ? 'visible' : 'hidden';
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
        var strLength = function (str) {
            return str.length;
        };
        //#endregion
        
        //#region Subscriptions
        self.isVisibleSubscription = self.isVisible.subscribe(newValue) {
            internalValue = newValue ? 12 : 42;
        };
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
    
    return ViewModel;
}));
