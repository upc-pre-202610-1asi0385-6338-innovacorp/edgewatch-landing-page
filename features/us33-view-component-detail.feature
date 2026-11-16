@US33
Feature: US33 View component detail
  As a reliability engineer
  I want to see coating, supplier and hours of a component
  So that I evaluate it

  Scenario: Detail
    Given the component list is visible
    When the engineer selects "Ver" on "EB-7734"
    Then the detail shows coating, supplier, hours and expected life
