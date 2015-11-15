(function (data) {

    var seedData = require("./seedData");

    data.getNodeCategories = function(next) {
        next(null, seedData.initialNotes);
    };

})(module.exports);