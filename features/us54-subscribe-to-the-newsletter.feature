@US54
Feature: US54 Subscribe to the newsletter
  As a landing visitor
  I want to subscribe to the newsletter
  So that I receive product news

  Scenario: Subscription
    Given the visitor enters a valid email
    When the visitor selects "Suscribirme"
    Then the message "¡Listo! Te suscribiste al newsletter." is shown

  Scenario: Duplicate email
    Given the email is already subscribed
    When the visitor subscribes again
    Then the message "Este correo ya está suscrito." is shown
