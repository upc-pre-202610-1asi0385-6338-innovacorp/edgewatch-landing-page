@US40
Feature: US40 Receive an end-of-life notice
  As a reliability engineer
  I want to be notified when a component nears its PCR
  So that I schedule the replacement

  Scenario: Near end of life
    Given EB-7734 has 2850 h of 3000 h
    When the Asset Owner demo opens
    Then the banner "EB-7734 al 95 % de su vida útil" is shown
