@AS-3
Feature: Global Position

	
	@AS-123
	Scenario: Test Global Position
		Given a user with current accounts
		When he access his global position
		Then he sould see his accounts each with this information:
		         |account alias                         |
		         |account number                        |
		         |account balance with currency symbol  |