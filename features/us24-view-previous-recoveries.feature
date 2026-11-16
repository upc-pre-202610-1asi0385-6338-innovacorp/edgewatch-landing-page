@US24
Feature: US24 View previous recoveries
  As a quality engineer
  I want to see previous recoveries of the same component
  So that I detect recurring failures

  Scenario: With previous recoveries
    Given the part EB-7734 is open
    When the engineer reads "Recuperaciones anteriores"
    Then the recovery "OF-02312 · 2025" is listed

  Scenario: First recovery
    Given the part VS-1120 is open
    When the engineer reads "Recuperaciones anteriores"
    Then the message "Primera recuperación de este componente." is shown
