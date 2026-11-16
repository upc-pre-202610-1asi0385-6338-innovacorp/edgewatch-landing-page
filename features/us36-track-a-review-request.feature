@US36
Feature: US36 Track a review request
  As a reliability engineer
  I want to see the status of my requests
  So that I know the answer

  Scenario: Status changes
    Given a request was sent
    When the supplier starts the analysis
    Then the request status changes to "EN REVISIÓN"
