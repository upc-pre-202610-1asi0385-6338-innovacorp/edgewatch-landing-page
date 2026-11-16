@US23
Feature: US23 Compare session against the recipe
  As a quality engineer
  I want to compare the session parameters with the PCR ranges
  So that I verify compliance

  Scenario: Comparison
    Given the historical session is open
    When the engineer reads the comparison table
    Then each parameter shows its range, average and status
