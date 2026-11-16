@US15
Feature: US15 Register the action taken
  As an HVOF operator
  I want to register the action, confirmed cause and whether the session stopped
  So that the event is documented

  Scenario: Complete record
    Given the action form is open
    When the operator selects a cause and confirms
    Then the alert changes to "ATENDIDA" and a confirmation is shown

  Scenario: Missing cause
    Given the action form is open
    When the operator confirms without a cause
    Then the message "Selecciona la causa confirmada." is shown
