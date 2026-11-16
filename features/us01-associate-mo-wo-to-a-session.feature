@US01
Feature: US01 Associate MO/WO to a session
  As an HVOF operator
  I want to associate the MO, WO and component before starting
  So that the parameters are linked to the part from the start

  Scenario: Valid manufacturing order
    Given the operator is on the "New session" form
    When the operator enters "OF-02548" and leaves the field
    Then the system shows "OF encontrada · Cliente Cerro Verde"
    And the "Continuar" button lets the operator proceed

  Scenario: Unknown manufacturing order
    Given the operator is on the "New session" form
    When the operator enters "OF-99999" and leaves the field
    Then the system shows "OF no encontrada. Verifica el código."
    And the session is not created
