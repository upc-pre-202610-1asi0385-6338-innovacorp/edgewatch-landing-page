@US35
Feature: US35 Request a failure review
  As a reliability engineer
  I want to request a review when a component fails early
  So that I support a warranty claim

  Scenario: Request sent
    Given the review form is open
    When the engineer describes the failure and sends it
    Then a request "SR-00nn" is listed as "ENVIADA"

  Scenario: Description too short
    Given the review form is open
    When the engineer sends a description shorter than 15 characters
    Then the message "Describe la falla" is shown
