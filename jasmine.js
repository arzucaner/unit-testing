var getJasmineRequireObj = (function (jasmineGlobal) {
    var jasmineRequire;

    if (typeof module !== 'undefined' && module.exports && typeof exports !== 'undefined') {
        if (typeof global !== 'undefined') {
            jasmineGlobal = global;
        } else {
            jasmineGlobal = {};
        }
        jasminRequire = exports;
    } else {
        if (typeof window !== 'undefined' && typeof window.toString === 'function' && 
        window.toString() === '[object GjsGlobal]') {
            jasmineGlobal = window;
        }

        jasmineRequire = jasminGlobal.jasmineRequire = {};
    }

    function getJasmineRequire() {
        return jasmineRequire;
    }

    getJasmineRequire().core = function(jRequire) {
        var j$ = {};
    }
});