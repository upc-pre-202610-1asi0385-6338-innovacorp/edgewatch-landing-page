@US50
Feature: US50 View benefits by segment
  As a landing visitor
  I want to see the benefits for my company type
  So that I recognize my needs

  Scenario: Switch segment
    Given the visitor is on "Beneficios"
    When the visitor selects the tab "Mineras · Asset Owners"
    Then the Asset Owner benefits are shown
