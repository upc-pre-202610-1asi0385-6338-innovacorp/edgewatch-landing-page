@US05
Feature: US05 Pause or finish a session
  As an HVOF operator
  I want to pause or finish the session with a reason
  So that stops are documented

  Scenario: Finish with a reason
    Given a session is "EN SESIÓN"
    When the operator selects "Finalizar" and the reason "Rociado completado" and confirms
    Then the session ends and the equipment returns to "DISPONIBLE"

  Scenario: Missing reason
    Given the finish form is open
    When the operator confirms without a reason
    Then the message "El motivo es obligatorio para la trazabilidad." is shown
