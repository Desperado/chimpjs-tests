#@ignore
@watch
Feature: Submit an enquiry

  As a User
  I want to be able to submit an enquiry form
  So I can have my enquiry responded to

  #@watch
  Scenario Outline: Submit an enquiry form
  	Given I am on the "<location>" page
  	Then I fill out the enquiry form
  	And I select an exact date of today
  	When I click submit
    Then I should be on the confirmation page

  Examples:
    | location |
    | contactus |

  Scenario Outline: Check that changing contact type to email changes the required field on an Enquiry form
    Given I am on the "<location>" page
    When I click on the "emailCheckbox" checkbox
    Then I should see "emailRequired" is a required field
    When I click on the "phoneCheckbox" checkbox
    Then I should see "phoneRequired" is a required field

  Examples:
    | location |
    | contactus |

  Scenario Outline: Check that selecting newsletter checkbox makes email a required field
    Given I am on the "<location>" page
    Then I should see "phoneRequired" is a required field
    And I should not see "emailRequired" is a required field
    When I click on the "emailCheckbox" checkbox

  Examples:
    | location |
    | contactus |

  Scenario Outline: Check that inputting incorrect data, prompts validation
    Given I am on the "<location>" page
    When I click submit
    Then I should see "Please enter your first name" on "firstNameError"
    Then I should see "Please enter your last name" on "lastNameError"
    Then I should see "Please provide a postcode" on "postcodeError"
    Then I should see "Please enter a valid telephone number including area code" on "phoneError"

  Examples:
    | location |
    | contactus |

  Scenario Outline: Check that group setting is being applied to enquiries where travellers are greater than 10
    Given I am on the "<location>" page
    And I set the "travellers" dropdown to display
    When I fill in the "adults" field with "9"
    When I fill in the "children" field with "9"
    Then I click the "passengers"
    Then the "keyword" hidden field should contain the value "groups"

  Examples:
    | location |
    | contactus |

  Scenario Outline: Check that adding more than 250 characters to comments correctly sets the hidden field
  Given I am on the "<location>" page
  Then I fill out the enquiry form
  And I fill in the "comments" with 250 characters
  Then I should see "twoHundredFiftyCharacters" in the hidden keyword

  Examples:
    | location |
    | contactus |

  Scenario Outline: Submit an enquiry form with a budget
    Given I am on the "<location>" page
    Then I fill out the enquiry form
    And I select an exact date of today
    Then I click the "budget" progressive disclosure button
    Then I fill in the "budgetField" field with "5000"
    Then I click submit

  Examples:
    | location |
    | contactus |

  Scenario Outline: Submit an enquiry form with autocomplete selected location
    Given I am on the "<location>" page
