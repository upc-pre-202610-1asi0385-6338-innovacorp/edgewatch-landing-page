@US26
Feature: US26 Generate a technical report
  As a quality engineer
  I want to generate a report choosing reason and evidence
  So that I support a claim

  Scenario: Report generated
    Given a part is open
    When the engineer selects a reason and evidence and selects "Ver vista previa"
    Then a draft preview is shown

  Scenario: Missing reason
    Given a part is open
    When the engineer selects "Ver vista previa" without a reason
    Then the message "Elige el motivo del reporte." is shown
