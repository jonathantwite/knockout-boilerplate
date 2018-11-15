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
        
        //#endregion
    
        //#region Private variables
        
        //#endregion
        
        //#region Public functions
        
        //#endregion
        
        //#region Private functions
        
        //#endregion
        
        //#region Subscriptions
        
        //#endregion
        
        //#region Disposal
        self.dispose = function() {
        
        };
        //#endregion
        
        //#region Initialisation
        
        //#endregion
    }
    
    return ViewModel;
}));
