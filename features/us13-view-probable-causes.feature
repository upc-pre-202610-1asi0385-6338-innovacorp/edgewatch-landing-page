@US13
Feature: US13 View probable causes
  As an HVOF operator
  I want to see probable causes ranked by probability
  So that I focus the inspection

  Scenario: Ranked causes
    Given an alert was raised
    When the operator selects "Ver diagnóstico"
    Then three causes are listed from highest to lowest probability
