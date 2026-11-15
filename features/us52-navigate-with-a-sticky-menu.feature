@US52
Feature: US52 Navigate with a sticky menu
  As a landing visitor
  I want to use a fixed top menu linking each section
  So that I reach any section quickly

  Scenario: Sticky menu
    Given the visitor scrolled down the page
    When the visitor selects "Planes" in the menu
    Then the page scrolls to the plans section and the menu stays visible
