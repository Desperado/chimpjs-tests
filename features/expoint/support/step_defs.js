var pageObjects = require("../../lib/pageObjects.js");
// var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
var jsdom = require('jsdom').jsdom;
var document = jsdom('<html></html>', {});
var window = document.defaultView;
var $ = require('jquery')(window);
// var $ = require('jquery');
module.exports = function() {
this.Then(/^I should see the "([^"]*)" ex point matches "([^"]*)"$/, function (selector, value) {
  el = browser.getValue(selectorMapping[selector]);
  client.pause(5000);
  // client.waitUntil(function() {
  //   return el === value;
  // })
  expect(el).toEqual(value);
});

this.Then(/^I wait for AJAX to finish$/, function () {
  client.waitUntil(function(){
    return (typeof(jQuery)=="undefined" || (0 === jQuery.active && 0 === jQuery(':animated').length))
  })
  browser.pause(5000);
});

this.When(/^I should see the "([^"]*)" value matches "([^"]*)"$/, function (selector, value) {
  el = browser.getValue(selectorMapping[selector]);
  expect(el).toContain(value);
});


this.Then(/^I should see the link "([^"]*)"$/, function (link) {
  browser.waitForVisible('//a[contains(text(), "' + link + '")]');
});

this.Then(/^the "([^"]*)" field should be empty$/, function (selector) {
  el = browser.getValue(selectorMapping[selector]);
  expect(el).not.toBe(true);
});





}
