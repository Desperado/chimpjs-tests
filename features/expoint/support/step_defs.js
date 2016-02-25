var common = require("../../lib/pageObjects.js");

module.exports = function() {
this.Then(/^I should see the "([^"]*)" ex point matches "([^"]*)"$/, function (selector, value) {
  el = browser.getValue(common.pageObjects[selector]);
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
  el = browser.getValue(common.pageObjects[selector]);
  expect(el).toContain(value);
});


this.Then(/^I should see the link "([^"]*)"$/, function (link) {
  browser.waitForVisible('//a[contains(text(), "' + link + '")]');
});

this.Then(/^the "([^"]*)" field should be empty$/, function (selector) {
  el = browser.getValue(common.pageObjects[selector]);
  expect(el).not.toBe(true);
});





}
