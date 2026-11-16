@US43
Feature: US43 Manage recipes (PCR)
  As a quality engineer
  I want to define the range of each parameter
  So that monitoring compares against the right values

  Scenario: Valid range
    Given the recipe form is open
    When the engineer saves 6.9 to 7.6 bar
    Then a new recipe version is saved and applied to the live session

  Scenario: Invalid range
    Given the recipe form is open
    When the engineer saves a minimum greater than the maximum
    Then the message "El mínimo debe ser menor que el máximo." is shown
