@AS-2
Feature: Login

	
	@AS-7
	Scenario: Login with invalid credentials
		Given a user at login screen
		When he introduces wrong credentials
		Then he should see an error message	

	
	@AS-6
	Scenario: Login with valid credentials
		Given a user with valid credentials at login page
		When he introduces his credentials
		Then he should view his global position