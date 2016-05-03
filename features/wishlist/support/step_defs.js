var common = require("../../lib/pageObjects.js");

module.exports = function() {

this.Then(/^I should see that there are "([^"]*)" "([^"]*)"$/, function (count, selector) {
  var elCount = browser.elements(common.pageObjects[selector], function(err, res){
    return res.value.length.toString();
  });
  expect(elCount).toEqual(count);

});

this.Given(/^the wishlist counter should be "([^"]*)"$/, function (count) {
  var el = common.pageObjects.wishListCounter;
  var val = client.execute(function(arg1){
    return jQuery(arg1).text();
  }, el);
  expect(val.value).toEqual(count);
});


this.Given(/^I should see text "([^"]*)" in the "([^"]*)" field$/, function (text, selector) {
  var elText = browser.getText(common.pageObjects[selector]).toString();
  expect(elText).toContain(text);
});

this.When(/^I click on the first product$/, function () {
  var el = common.pageObjects.procatProductView;
  client.waitForVisible(el);
  browser.click(el);
});

this.Then(/^I close the dialogue box$/, function () {
  var el = common.pageObjects.dialogueBox;
  client.waitForVisible(el);
  browser.click(el);
});

this.Then(/^I click the add to wishlist button$/, function () {
  var el = common.pageObjects.wishlistAddButton;
  client.waitForVisible(el);
  browser.click(el);
});
this.Then(/^I fill out the static enquiry form$/, function () {
  client.waitForExist("#edit-firstname");
  client.setValue('#edit-departing', 'Brisbane');
  client.setValue('#edit-destination', 'Sydney');
  client.setValue('#edit-freetext', 'test.mavericks');
  client.setValue('#edit-firstname', 'test.mavericks');
  client.setValue('#edit-lastname', 'test.mavericks');
  client.setValue('#edit-postcode', '4000');
  client.setValue('#edit-phone', '0400000000');
  client.setValue('#edit-email', 'fcl.websolutions@gmail.com');
});

this.Then(/^I go to the "([^"]*)" page$/, function (arg1) {
  // Write the automation code here
  pending();
});

this.Then(/^I should not see the text "([^"]*)"$/, function (text) {
  var elText = browser.getText(common.pageObjects.secondHeader).toString();
  expect(elText).not.toContain(text);
});

this.When(/^I click the remove from wishlist button$/, function () {
  var el = common.pageObjects.removeFromWishlist;
  client.execute(function(arg1){
    return jQuery(arg1).click();
  }, el);
  // browser.click(el);
});


this.Then(/^I check the localstorage has a value matching "([^"]*)"$/, function (arg1) {
  // Write the automation code here
  pending();
});

};
