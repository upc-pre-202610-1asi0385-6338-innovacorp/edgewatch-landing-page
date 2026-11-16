@US56
Feature: US56 View reports shared by the supplier
  As a reliability engineer
  I want to see the reports my supplier shared
  So that I keep the evidence

  Scenario: Shared reports
    Given the quality engineer shared "RT-0215"
    When the reliability engineer opens "Reportes compartidos"
    Then "RT-0215" is listed as "COMPARTIDO"
