@US37
Feature: US37 Register operating hours
  As a reliability engineer
  I want to register the hour meter reading
  So that service life is computed

  Scenario: Valid reading
    Given the last reading is 2610 h
    When the engineer saves 2950 h
    Then the message "Lectura guardada" is shown

  Scenario: Lower reading
    Given the last reading is 2610 h
    When the engineer saves 2400 h
    Then the message "La lectura no puede ser menor que la anterior" is shown
