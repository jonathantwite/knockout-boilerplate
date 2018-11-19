requirejs.config({
    baseUrl: 'scripts/app/',
    paths: {
        //Vendor
        'bootstrap': '../bootstrap.min',
        'knockout': '../vendor/knockout-3.3.0',
        'jquery': "../vendor/jquery-3.3.1",
        'text': '../vendor/text',

        //Jasmine
        'jasmine': '../../jasmine/lib/jasmine-2.99.0/jasmine',
        'jasmine-html': '../../jasmine/lib/jasmine-2.99.0/jasmine-html',
        'jasmine-boot': '../../jasmine/lib/jasmine-2.99.0/boot',
        
        //Tests
        'tests': '../../test-files'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
          deps : ['jasmine'],
          exports: 'jasmine'
        },
        'jasmine-boot': {
          deps : ['jasmine', 'jasmine-html'],
          exports: 'jasmine'
        }
    },
    deps: ['bootstrap']
});

require(['jasmine-boot'], function() {  /* Putting jasmine-boot here appears to prevent the 1 in 5 occurance of the test running before jasmine-boot finishes */
    require(['component-tester', 'tests/ComponentViewModel-tests'], function() {
        window.onload();
    });
});