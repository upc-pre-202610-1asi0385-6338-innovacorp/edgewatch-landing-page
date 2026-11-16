@US31
Feature: US31 Query generated reports
  As a quality engineer
  I want to see issued reports and certificates
  So that I find them quickly

  Scenario: Reports list
    Given the quality demo is open
    When the engineer reads "Reportes emitidos"
    Then each report shows its code, description and state
