define(['knockout', 'components/ComponentViewModel-amd'], function(ko, ComponentViewModel){
    describe("Component: initialisation", function(){
        
        var vm;
        var editable = true;
        beforeEach(function(){
            vm = new ComponentViewModel.viewModel({controlIsEditable: ko.observable(editable)});
        });

        it("initializes with correct editable value", function(){
            expect(vm.isEditable()).toBe(editable);
        });
    })
});