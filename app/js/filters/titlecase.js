formsAngular.filter('titleCase',[function() {
    return function(str, stripSpaces) {
        var value = str.replace(/(_|\.)/g, ' ').replace(/[A-Z]/g, ' $&').replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
        if (stripSpaces) {
            value = value.replace(/\s/g,'');
        }
        return value;
    }
}]);