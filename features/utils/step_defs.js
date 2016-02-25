var common = require("../lib/pageObjects.js")
var cacheBust = '?' + (new Date).getTime();

module.exports = function() {

  this.Given(/^I am on the "([^"]*)" page$/, function (location) {
    browser.url(common.siteSettings[location] + cacheBust);
    client.execute(function(){
      localStorage.clear();
    });
  });

  this.Then(/^I clear the cache$/, function () {
    client.execute(function(){
      localStorage.clear();
    });
  });

  this.Then(/^I fill in the "([^"]*)" field with "([^"]*)"$/, function (selector, value) {
    client.setValue(common.pageObjects[selector], value);
  });

  this.Then(/^I click the "([^"]*)"$/, function (selector) {
    client.click(common.pageObjects[selector]);
  });

  this.Then(/^I should see "([^"]*)" in the title$/, function (text) {
    client.waitForExist('h1', 5000);
    var header = client.getText('h1');
    expect(header).toContain(text);
  });

  this.Then(/^I should see "([^"]*)" in the url$/, function (partial) {
    var found = browser.url().value.indexOf(partial) > -1;
    expect(found).toBe(true);
  });

  this.Then(/^I should see "([^"]*)" on "([^"]*)"$/, function (text, selector) {
    client.waitForExist(common.pageObjects[selector], 3000);
    expect(client.getText(common.pageObjects[selector])).toEqual(text);
  });

}
