@US10
Feature: US10 Mark an alert as reviewed
  As an HVOF operator
  I want to mark an alert as reviewed
  So that the team knows it was handled

  Scenario: Mark as reviewed
    Given an alert is "ALERTA"
    When the operator selects "Marcar como revisada"
    Then the alert status changes to "REVISADA"
