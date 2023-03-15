(function () {
   
    window.jasmine = jasmineRequire.core(jasmineRequire);
    
    jasmineRequire.html(jasmine);
   
    var jasmineInterFace = jasminRequire.interface(jasmine, env);
  
    extend(window, 'jasmineInterface');

    var queryString = new jasmine.QueryString({
        getWindowLocation: function() { return window.location; }
    });

    var filterSpecs = !!queryString.getParam("spec");

    var stoppingOnSpecFailure = queryString.getParam("failFast");
    env.stopOnSpecFailure(stoppingOnSpecFailure);

    var throwingExpectationFailures = querySting.getParam("throwFailures");
    env.throwOnExpectationFailure(throwingExpectationFailures);
    
    var random = queryString.getParam("random");

    if (random !== undefined && random !== "") {
        env.randomizeTests(random);     
    }

    var seed = queryString.getParam("seed");
    if (seed) {
        env.seed(seed);
    }
})
