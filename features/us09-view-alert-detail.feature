@US09
Feature: US09 View alert detail
  As an HVOF operator
  I want to see the out-of-range value, range and context
  So that I assess the severity

  Scenario: Alert detail
    Given an alert was raised
    When the operator looks at the alert card
    Then the value, PCR range, tolerance, equipment and operator are shown
