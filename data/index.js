(function(data) {

    var seedData = require("./seedData");
    var database = require("./database");

    data.getNoteCategories = function(next) {
        //next(null, seedData.initialNotes);
        database.getDb(function(err, db) {
            if (err) {
                next(err, null);
            } else {
                db.notes.find().sort({ name: 1 }).toArray(function(err, results) {
                    if (err) {
                        next(err, null);
                    } else {
                        next(null, results);
                    }
                });
            }
        });
    };

    function seedDatabase() {
        database.getDb(function(err, db) {
            if (err) {
                console.log("Failed to seed database: " + err);
            } else {
                // Test to see if data exits.
                db.notes.count(function(err, count) {
                    if (err) {

                    } else {
                        if (count === 0) {
                            console.log("Seeding the database...");
                            // This (forEach) will always work because we are in NodeJS,
                            // not the browser. JavaScript version is not an issue.
                            seedData.initialNotes.forEach(function(item) {
                                db.notes.insert(item, function(err) {
                                    if (err) {
                                        console.log("Failed to insert note into database");
                                    }
                                });
                            });
                        } else {
                            console.log("Database already seeded.");
                        }
                    }
                });
            }
        });
    }

    seedDatabase();

})(module.exports);