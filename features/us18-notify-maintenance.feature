@US18
Feature: US18 Notify maintenance
  As an HVOF operator
  I want to notify maintenance from the recommended action
  So that the right team acts

  Scenario: Notify
    Given the diagnosis is visible
    When the operator selects "Notificar a mantenimiento"
    Then a confirmation that maintenance was notified is shown
