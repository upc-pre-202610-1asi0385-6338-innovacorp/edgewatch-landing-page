@US44
Feature: US44 View equipment stop history
  As a quality engineer
  I want to see stops with cause and duration
  So that I prioritize maintenance

  Scenario: Stops list
    Given the quality demo is open
    When the engineer reads the stops list
    Then each stop shows date, duration and cause
