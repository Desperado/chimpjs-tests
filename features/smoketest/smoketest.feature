Feature: Automated smoketest
  In order to ensure there are no errors
  As a developer
  I need to be check each page for errors

  Scenario Outline: Checks that there are no browser errors
    Given I am on the "<location>" page
    Then I should see there are no errors
    Then I wait for a period of time

  Examples:
    | location |
    | home |
    | flights |
    | tours |
    | holidaysBali|
