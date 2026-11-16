@US47
Feature: US47 Choose a subscription plan
  As a company administrator
  I want to choose a plan by number of units
  So that I pay according to my size

  Scenario: Choose plan
    Given the visitor is on "Planes"
    When the visitor selects "Elegir plan" on "Planta"
    Then the demo form shows "Plan elegido: Planta"
