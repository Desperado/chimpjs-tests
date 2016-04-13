var common = require("../../lib/pageObjects.js")

module.exports = function() {

  this.Then(/^the Phone number in the header should be "([^"]*)"$/, function (value) {
    expect(client.getHTML('.header-fc-phone-number')).toContain(value);
  });

  this.Then(/^I should see the phone number "([^"]*)" in the "([^"]*)"$/, function (value, selector) {
    expect(client.getHTML(common.pageObjects[selector])).toContain(value);
  });

  this.Given(/^I close the build"$/, function () {
    browser.end();
  });

}
