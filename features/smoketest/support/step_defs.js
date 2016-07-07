var common = require("../../lib/pageObjects.js")

module.exports = function() {

  this.Then(/^I should see there are no errors$/, function () {
    var logs = JSON.stringify(client.log('browser'));
    // console.log(logs);
    // console.log(client.log('browser'));
    // expect(logs).not.toContain('WARNING');
    // logLevelSevere = false;
    // if (client.log('level') === 'SEVERE') {
    //   console.log('log level SEVERE detected')
    //   logLevelSevere = true;
    // }
    // expect(logLevelSevere).toBe(false);
    expect(logs).not.toContain('SEVERE');

  });

}
