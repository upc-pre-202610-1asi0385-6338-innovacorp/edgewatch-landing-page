@US02
Feature: US02 Confirm and start monitoring
  As an HVOF operator
  I want to review a summary before activating monitoring
  So that I avoid starting a session with the wrong order

  Scenario: Confirm the summary
    Given the operator completed a valid session form
    When the operator selects "Iniciar monitoreo"
    Then the session status changes to "EN SESIÓN"
    And the message "Monitoreo iniciado" is shown

  Scenario: Correct the data
    Given the confirmation summary is visible
    When the operator selects "Corregir datos"
    Then the form is shown again with the entered data
