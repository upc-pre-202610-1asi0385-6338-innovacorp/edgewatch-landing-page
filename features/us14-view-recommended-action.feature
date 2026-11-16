@US14
Feature: US14 View recommended action
  As an HVOF operator
  I want to see the recommended action with priority and steps
  So that I solve the failure in order

  Scenario: Recommended action
    Given the diagnosis is visible
    When the operator reads the recommended action
    Then the priority "CRÍTICA" and three ordered steps are shown
