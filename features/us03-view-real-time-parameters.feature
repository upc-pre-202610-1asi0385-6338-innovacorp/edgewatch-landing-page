@US03
Feature: US03 View real-time parameters
  As an HVOF operator
  I want to see each process parameter with its value and status
  So that I know at a glance whether the process is nominal

  Scenario: Parameters update every second
    Given a session is "EN SESIÓN"
    When one second passes
    Then the five parameters show a new value, the PCR range and a status chip
