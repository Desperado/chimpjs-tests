#@ignore
#@watch
Feature: Facet Search automated test
  In order to test that facets correctly apply to searches
  As a user
  I need to submit search forms with facets selected

  Scenario Outline: Submitting a search form with facets applied
    Given I am on the "<location>" page
    And I check the "[1 TO 500]" checkbox with jquery
    And I wait for AJAX to finish
    Then I should see that the "[1 TO 500]" checkbox is checked
    Then I should see that there are "10" "products"

  Examples:
    | location       |
    | holidaysSearch |
    | railSearch     |
    | toursSearch    |
    | cruisesSearch  |

  Scenario Outline: Checking the products display filter applies
    Given I am on the "<location>" page
    When I select the "30" from the "productsDisplay" selector
    And I wait for AJAX to finish
    Then I should see that there are "30" "products"

  Examples:
    | location        |
    | holidaysSearch |
    | railSearch     |
    | toursSearch    |
    | cruisesSearch  |

  Scenario Outline: Checking the products display filter applies
    Given I am on the "<location>" page
    When I select the "2" from the "pagesDropdown" selector
    And I wait for AJAX to finish
    Then I select the "60" from the "productsDisplay" selector
    And I wait for AJAX to finish
    Then I should see that there are "60" "products"

  Examples:
    | location        |
    | holidaysSearch |
    | railSearch     |
    | toursSearch    |
    | cruisesSearch  |

  Scenario Outline: Submitting a search form with zero price facets applied
    Given I am on the "<location>" page
    And I check the "[* TO 0]" checkbox with jquery
    And I wait for AJAX to finish
    Then I should see that the "[* TO 0]" checkbox is checked
    Then I should see that there are "10" "products"

  Examples:
    | location        |
    | cruisesSearch  |

  Scenario Outline: Checking that unchecking a facet works correctly
    Given I am on the "<location>" page
    And I check the "[1 TO 500]" checkbox with jquery
    And I wait for AJAX to finish
    Then I should see that the "[1 TO 500]" checkbox is checked
    And I should see that there are "10" "products"
    When I uncheck the "[1 TO 500]" checkbox with jquery
    And I wait for AJAX to finish
    Then I should see that the "[1 TO 500]" checkbox is unchecked

  Examples:
  | location        |
  | holidaysSearch |
  | railSearch     |
  | toursSearch    |
  | cruisesSearch  |
