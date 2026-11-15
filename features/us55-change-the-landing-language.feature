@US55
Feature: US55 Change the landing language
  As a landing visitor
  I want to switch between Spanish and English
  So that I read in my language

  Scenario: Switch to English
    Given the landing is in Spanish
    When the visitor selects "EN"
    Then the headline reads "Every coated part, with its evidence."
