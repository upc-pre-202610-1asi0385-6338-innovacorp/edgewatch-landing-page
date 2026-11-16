@US39
Feature: US39 Compare suppliers
  As a reliability engineer
  I want to compare my suppliers by performance
  So that I choose suppliers with data

  Scenario: Supplier table
    Given the Asset Owner demo is open
    When the engineer reads the supplier table
    Then each supplier shows its number of components and average life
