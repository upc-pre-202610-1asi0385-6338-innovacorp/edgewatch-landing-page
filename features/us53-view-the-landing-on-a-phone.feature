@US53
Feature: US53 View the landing on a phone
  As a landing visitor
  I want to see the landing adapted to my phone
  So that I can read it on site

  Scenario: Mobile menu
    Given the visitor uses a 390 px wide screen
    When the visitor opens the menu button
    Then the navigation links are shown stacked and there is no horizontal scroll
