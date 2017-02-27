var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds161049.mlab.com:61049/dlkwebscraper';
    }
    
}
