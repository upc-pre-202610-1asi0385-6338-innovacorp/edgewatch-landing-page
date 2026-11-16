@US04
Feature: US04 View trend with nominal band
  As an HVOF operator
  I want to see a parameter trend over the recipe band
  So that I confirm the stability of the process

  Scenario: Select a parameter
    Given a session is "EN SESIÓN"
    When the operator selects "Presión de cámara" in "Tendencia de"
    Then the chart draws the values over the nominal band
    And out-of-range points are drawn in red
