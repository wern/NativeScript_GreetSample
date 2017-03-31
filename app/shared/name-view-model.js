var Observable = require("data/observable").Observable;

function NameViewModel(){
    var name = new Observable({
        name: "",
        reverse: ""
    });

    name.addEventListener(Observable.propertyChangeEvent, function (pcd) {
        if(pcd.propertyName === 'name'){
            name.reverse = pcd.value.split('').reverse().join('');
        }
    });

    return name;
}

module.exports = NameViewModel;