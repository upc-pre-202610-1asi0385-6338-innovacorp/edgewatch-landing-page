@US19
Feature: US19 Search a part by S/N, MO or WO
  As a quality engineer
  I want to search a part by serial number, MO or WO
  So that I find its history

  Scenario: Part found
    Given the quality demo is open
    When the engineer searches "EB-7734"
    Then the part "Eje de bomba · EB-7734" is listed

  Scenario: Part not found
    Given the quality demo is open
    When the engineer searches "EB-9999"
    Then the message "No encontramos «EB-9999»" is shown
