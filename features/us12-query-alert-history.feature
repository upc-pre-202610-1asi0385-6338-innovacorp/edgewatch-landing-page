@US12
Feature: US12 Query alert history
  As a quality engineer
  I want to query alerts by parameter
  So that I identify recurring failures

  Scenario: Filter by parameter
    Given the alert history is visible
    When the engineer filters by "Temp. de sustrato"
    Then only substrate temperature alerts are listed

  Scenario: No results
    Given the alert history is visible
    When the filter has no matching alerts
    Then the message "Sin alertas para este filtro." is shown
