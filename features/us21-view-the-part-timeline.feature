@US21
Feature: US21 View the part timeline
  As a quality engineer
  I want to see the part timeline from reception to certificate
  So that I reconstruct what happened

  Scenario: Timeline
    Given a part is listed
    When the engineer selects "Ver"
    Then the timeline shows each stage with its date and state
