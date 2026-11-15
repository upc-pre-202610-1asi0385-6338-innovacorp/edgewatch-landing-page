@US48
Feature: US48 Understand the value proposition
  As a landing visitor
  I want to understand what EdgeWatch does at first glance
  So that I decide whether to keep reading

  Scenario: Hero
    Given the visitor opens the landing page
    When the page loads
    Then the headline, value proposition and "Solicitar demo" button are visible without scrolling
