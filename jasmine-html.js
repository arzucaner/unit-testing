jasmineRequire.html = function(j$) {
    j$.ResultsNode = jasmineRequire.ResultsNode();
    j$.HtmlReporter = jasmineRequire.HtmlReporter(j$);
    j$.QueryString = jasmineRequire.QueryString();
    j$.HtmlSpecFilter = jasmineRequire.HtmlSpecFilter();
};

jasmineRequire.HtmlReporter = function(j$) {

    var noopTimer = {
        start: function() {},
        elapsed: function() { return 0;}
    };

    function ResultsStateBuilder() {
        this.topResults = new j$.ResultsNode({}, '', null);
        this.currentParent = this.topResults;
        this.specsExecuted = 0;
        this.failureCount = 0;
        this.pendingSpecCount = 0;      
    }

    ResultsStateBuilder.prototype.suiteStarted = function(result) {
        this.currentParent.addChild(result, 'suite');
        this.currentParent = this.currentParent.last();
};

ResultsStateBuilder.prototype.suiteDone = function(result) {
    this.currentParent.updateResult(result);
    if (this.currentParent !== this.topResults) {
        this.cureentParent = this.current|parent.parent;
    }
  }
}