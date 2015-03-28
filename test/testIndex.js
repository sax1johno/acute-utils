var utils = require('../lib/index'),
    path = require('path'),
    configPath = path.join(__dirname, "testConfig.js");

describe('utils', function() {
    describe('#loadApp', function() {
        it("Should load an architect app", function(done) {
            var config = utils.loadApp(configPath, function(err, arch) {
                console.log(arch);
                done(err);
            });
        });
    });
});
