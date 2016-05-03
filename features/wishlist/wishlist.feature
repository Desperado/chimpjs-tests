#@watch
Feature: Automated testing of the shortlist feature
  In order to use the shortlist functionality
  As a user
  I need to be able to add, delete and view a page where my shortlist items are stored

  Scenario Outline: Checks that there are no wishlist added by default
    Given I am on the "wishlist" page
    Then I clear the cache
    Then I should see that there are "0" "procatProducts"
    And the wishlist counter should be "0"
    And I should see text "No Items in Wishlist" in the "secondHeader" field
    And I follow "<link>"
    Then I should see "<page>" in the url
    Then I should see text "<header>" in the "title" field

  Examples:
    | link            | page             | header                      |
    | Browse Flights  | /flights         | Flights                     |
    | Browse Holidays | /holidays        | Holiday Packages and Deals  |
    | Browse Hotels   | /accommodation   | Accommodation & Hotel Deals |
    | Browse Tours    | /tours           | Travel Tours                |

  Scenario: Added a product to the wishlsit works correctly
    Given I am on the "tours" page
    When I click on the first product
    Then I close the dialogue box
    Then I wait for a period of time
    Then I click the add to wishlist button
    Then I wait for a period of time
    Then the wishlist counter should be "1"
    When I am on the "wishlist" page
    Then I should see that there are "1" "procatProducts"
    And I should not see the text "No Items in Wishlist"

  Scenario: Checks that enquiring on shortlist works correctly
    Given I am on the "wishlist" page
    And I should see that there are "1" "procatProducts"
    And I should not see the text "No Items in Wishlist"
    Then I follow "Enquire about1selected items"
    Then I fill out the static enquiry form
    And I select an exact date of today
  	When I click submit
    Then I should be on the confirmation page

  Scenario: Removes a shortlist item from the shortlist
    Given I am on the "wishlist" page
    And I should see that there are "1" "procatProducts"
    And I should not see the text "No Items in Wishlist"
    When I click the remove from wishlist button
    Then I wait for a period of time
    Then I should see that there are "0" "procatProducts"
    And I should see text "No Items in Wishlist" in the "secondHeader" field
