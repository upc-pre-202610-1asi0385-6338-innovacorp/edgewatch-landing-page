@US32
Feature: US32 View my components
  As a reliability engineer
  I want to see my recovered components with their status
  So that I know which need attention

  Scenario: Components list
    Given the Asset Owner demo is open
    When the page loads
    Then each component shows S/N, supplier, hours and life status
