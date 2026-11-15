@US49
Feature: US49 View the main features
  As a landing visitor
  I want to see the core features grouped
  So that I understand the problems it solves

  Scenario: Features
    Given the visitor scrolls to "Funciones"
    When the section is visible
    Then six feature cards with title and description are shown
