@US06
Feature: US06 View shift summary
  As an HVOF operator
  I want to see my equipment, session and shift summary
  So that I plan my shift

  Scenario: Shift summary
    Given the operator opens the operator demo
    When the page loads
    Then the summary shows sessions, alerts and the equipment status
