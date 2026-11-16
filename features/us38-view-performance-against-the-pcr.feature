@US38
Feature: US38 View performance against the PCR
  As a reliability engineer
  I want to compare real life against the expected life
  So that I plan replacements

  Scenario: Performance bars
    Given the Asset Owner demo is open
    When the engineer reads "Desempeño vs. PCR"
    Then each component shows its percentage of expected life
