@US16
Feature: US16 Attach an evidence photo
  As an HVOF operator
  I want to attach a photo to the action
  So that I document the component state

  Scenario: Valid photo
    Given the action form is open
    When the operator attaches a JPG of 1 MB
    Then a preview of the photo is shown

  Scenario: Photo too large
    Given the action form is open
    When the operator attaches an image larger than 5 MB
    Then the message "La foto supera 5 MB." is shown and the file is discarded
