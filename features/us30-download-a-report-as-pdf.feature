@US30
Feature: US30 Download a report as PDF
  As a quality engineer
  I want to download the report as PDF
  So that I attach it to internal documents

  Scenario: Download
    Given the preview is visible
    When the engineer selects "Descargar PDF"
    Then the print dialog opens with only the report preview
