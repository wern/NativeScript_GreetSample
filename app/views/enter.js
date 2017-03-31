var frameModule = require("ui/frame");
var Observable = require("data/observable").Observable; 
/* var NameViewModel = require("~/shared/name-view-model.js"); */

var localName = new Observable({
    name: "",
    reverse: ""
});

localName.addEventListener(Observable.propertyChangeEvent, function (pcd) {
    if(pcd.propertyName === 'name'){
        localName.reverse = pcd.value.split('').reverse().join('');
    }
});

exports.onLoaded = function(args) {
    page = args.object;
   /*  page.bindingContext = new NameViewModel(); */
   page.bindingContext = localName; 
};

exports.greet = function() {
    frameModule.topmost().navigate({
        moduleName: "views/greet",
        context: page.bindingContext
    });
};