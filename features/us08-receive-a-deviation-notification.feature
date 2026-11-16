@US08
Feature: US08 Receive a deviation notification
  As an HVOF operator
  I want to be notified when a parameter leaves its range
  So that I can act even if I am not looking at the screen

  Scenario: Deviation detected
    Given a session is "EN SESIÓN"
    When the chamber pressure goes above 7.6 bar
    Then a notification "ALERTA · Presión de cámara" is shown
    And the alerts counter increases by one
