@US22
Feature: US22 View a historical session
  As a quality engineer
  I want to see the telemetry of a past session
  So that I explain events with data

  Scenario: Historical session
    Given a part timeline is open
    When the engineer selects "Ver sesión histórica"
    Then the pressure chart over the PCR band is drawn
