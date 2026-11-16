@US25
Feature: US25 Register post-process inspection
  As a quality engineer
  I want to register thickness and hardness
  So that the part record is complete

  Scenario: Conforming part
    Given the inspection form is open
    When the engineer saves 0.30 mm and 1150 HV
    Then the part is marked as conforming

  Scenario: Non-conforming part
    Given the inspection form is open
    When the engineer saves 0.21 mm
    Then the message "Fuera de especificación" is shown and the certificate is blocked
