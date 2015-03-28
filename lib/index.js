var architect = require('architect');

exports.loadApp = function(configPath, cb) {
    architect.loadConfig(configPath, function(err, conf) {
        if (err) {
            console.error("Unable to load app:", err);
            cb(err);
        } else {
            architect.createApp(conf, function(err, arch) {
                if (!err) {
                    /**
                     * Listen on the configured port.
                     **/
                     cb(null, arch);
                    // var appService = arch.getService("app");
                    // console.log(appService.config);
                    // appService.app.listen(appService.config.port);
                    // console.log("Now listening to acute app on port ", appService.config.port);
                } else {
                    // If the boot promise is rejected, then display the errors.
                    console.error("Unable to load app: ", err);
                    cb(err);
                }
            });
        }
  });
};