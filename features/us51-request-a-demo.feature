@US51
Feature: US51 Request a demo
  As a landing visitor
  I want to request a demo through a form
  So that I evaluate the solution

  Scenario: Valid request
    Given the demo form is complete with a work email
    When the visitor submits the form
    Then the message "¡Gracias! Te contactaremos en menos de 24 h." is shown

  Scenario: Invalid email
    Given the visitor enters "carlos@gmail.com"
    When the visitor submits the form
    Then the message "Ingresa un correo corporativo válido" is shown
