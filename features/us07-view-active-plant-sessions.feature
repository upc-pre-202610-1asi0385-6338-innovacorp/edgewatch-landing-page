@US07
Feature: US07 View active plant sessions
  As a quality engineer
  I want to see all active sessions with their status
  So that I supervise several pieces of equipment

  Scenario: Active sessions list
    Given the quality demo is open
    When the page loads
    Then each active session shows its MO, equipment, operator and status chip
