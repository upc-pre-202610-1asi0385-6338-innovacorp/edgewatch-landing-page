@US29
Feature: US29 Share a report with the client
  As a quality engineer
  I want to share the report with the client contact
  So that the client has the evidence

  Scenario: Share
    Given the preview is visible
    When the engineer selects "Compartir con el cliente"
    Then the report appears as "COMPARTIDO" in the client portal
