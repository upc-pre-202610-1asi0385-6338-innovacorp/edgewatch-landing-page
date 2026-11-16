@US28
Feature: US28 Issue an application certificate
  As a quality engineer
  I want to issue the certificate of an MO
  So that I deliver it to the client

  Scenario: Inspected part
    Given the preview of an inspected part is visible
    When the engineer selects "Emitir certificado"
    Then the certificate "CE-0342" is added as "EMITIDO"

  Scenario: Part without inspection
    Given the preview of a part without inspection is visible
    When the engineer selects "Emitir certificado"
    Then the message "falta una inspección post-proceso conforme" is shown
