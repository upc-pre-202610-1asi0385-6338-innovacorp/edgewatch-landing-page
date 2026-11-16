@US20
Feature: US20 Filter the history
  As a quality engineer
  I want to filter by client and status
  So that I narrow the search

  Scenario: Filter by client
    Given the search results are visible
    When the engineer selects the client "Las Bambas"
    Then only Las Bambas parts are listed
