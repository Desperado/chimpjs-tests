@ignore
#@watch

Feature: Automated testing of GTM tags in the datalayer

  In order to test that GTM tags are properly present
  As a user
  I need to assert that the elements are present in the datalayer

  Scenario Outline: Test that google tags are correctly showing in the dataLayer
    Given I am on the "<location>" page
    Then I assert that the "productSku" value matches the fcl procat product from the "sku" element
    Then I assert that the "productCategory" value matches the fcl procat product from the "category" element
    Then I assert that the "productDestination" value matches the fcl procat product from the "destination" element
    Then I assert that the "productName" value matches the fcl procat product from the "package-name" element
    Then I assert that the "productSelection" value matches the fcl procat product from the "product-selection" element

  Examples:
    | location                |
    | flightsSydneyToAuckland |
    | holidayPackageLondon    |
    | cruisePackageAlaska     |
    | tourPackageLasAngeles   |
