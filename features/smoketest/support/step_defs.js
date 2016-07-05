var common = require("../../lib/pageObjects.js")

module.exports = function() {

  this.Then(/^I should see there are no errors$/, function () {
    // var logs = JSON.stringify(client.log('browser'));
    // console.log(logs);
    // console.log(client.log('browser'));
    // expect(logs).not.toContain('WARNING');
    // expect(logs).not.toContain('SEVERE');

    var logs = client.log('browser');
    expect(logs).not.toContain('severe');
    console.log(logs);   // -> "org.openqa.selenium.NoSuchElementException"

  });

}
