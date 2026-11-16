@US42
Feature: US42 View equipment status
  As a quality engineer
  I want to see each unit status
  So that I plan the work

  Scenario: Equipment list
    Given the quality demo is open
    When the engineer reads the equipment list
    Then each unit shows "DISPONIBLE", "EN SESIÓN" or "MANTENIMIENTO"
