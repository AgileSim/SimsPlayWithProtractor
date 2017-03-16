Feature: Login

  As I user I want to access my personal data when accessing with my own credentials.

  Scenario: Login ok
    Given a user with valid credentials at login page
     When he introduces his credentials
     Then he should view his global position

  Scenario: Login ko
    Given a user at login screen
     When he introduces wrong credentials
     Then he should see an error message