@US27
Feature: US27 Preview a report
  As a quality engineer
  I want to preview the report before issuing it
  So that I avoid errors

  Scenario: Preview
    Given a report was generated
    When the engineer reads the preview
    Then the preview shows part, client, reason, comparison and state "BORRADOR"
