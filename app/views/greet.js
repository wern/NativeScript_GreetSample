var frameModule = require("ui/frame");

exports.onLoaded = function(args) {
    page = args.object;
    page.bindingContext = page.navigationContext;
};

exports.goBack = function() {
    var topmost = frameModule.topmost();
    topmost.goBack();
};