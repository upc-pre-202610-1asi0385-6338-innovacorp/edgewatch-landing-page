@US11
Feature: US11 Configure alert thresholds
  As a quality engineer
  I want to define the tolerance time and severity per parameter
  So that alerts are not raised for transient noise

  Scenario: Valid tolerance
    Given the threshold form is open
    When the engineer saves 30 seconds
    Then the message "Umbral guardado" is shown

  Scenario: Invalid tolerance
    Given the threshold form is open
    When the engineer saves 900 seconds
    Then the message "Ingresa un valor entre 5 y 300 s." is shown
