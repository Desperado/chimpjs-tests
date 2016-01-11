var pageObjects = require("../../lib/pageObjects.js")
// var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
var jsdom = require('jsdom').jsdom;
var document = jsdom('<html></html>', {});
var window = document.defaultView;
var $ = require('jquery')(window);
// var $ = require('jquery');
module.exports = function() {

  this.Then(/^the Phone number in the header should be "([^"]*)"$/, function (value) {
    expect(client.getHTML('.header-fc-phone-number')).toContain(value);
  });

  this.Then(/^I should see the phone number "([^"]*)" in the "([^"]*)"$/, function (value, selector) {
    expect(client.getHTML(selectorMapping[selector])).toContain(value);
  });

}
