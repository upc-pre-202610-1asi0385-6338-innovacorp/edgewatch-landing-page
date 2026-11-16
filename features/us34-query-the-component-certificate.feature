@US34
Feature: US34 Query the component certificate
  As a reliability engineer
  I want to see the application certificate
  So that I validate the work

  Scenario: Certificate available
    Given the detail of EB-7734 is open
    When the engineer selects "Ver certificado"
    Then the certificate "CE-0342" is shown

  Scenario: Certificate not available
    Given the detail of VS-1120 is open
    When the engineer selects "Ver certificado"
    Then the message "El certificado aún no está disponible" is shown
