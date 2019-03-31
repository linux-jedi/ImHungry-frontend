Feature:
	Register a username and password to the I'm Hungry website

Background: 
	Given I am on the Register page of the I'm Hungry website

Scenario: page design
	Then I should see a text field for username
	And I should see a text field for password
	And I should see a text field for email
	And I should see a register button
	And I should see a back-to-sign-in button

Scenario Outline: try form with well formed inputs
	When I register for <username> and <password> and <email>
	And I press Register
	Then I should be on the Search Page

	Examples:
	| username | password | email |
	| "ericdddchoi" | "eric's password" | "ericdddchoi@usc.edu" |
	| "kartikmmmmahajan" | "kartik's password" | "kartikmmmmahajan@usc.edu" |

Scenario Outline: try form without a username
	When I register for <username> and <password> and <email>
	And I press Register
	Then I should be on the Register Page
	
	Examples:
	| username | password | email |
	| "" | "eric's password" | "eric's email" |
	| "       " | "kartik's password" | "kartik's password" |

Scenario Outline: try form without a password
	When I register for <username> and <password> and <email>
	And I press Register
	Then I should be on the Register Page

	Examples:
	| username | password | email |
	| "ericdchoi" | "" | "eric's email" |
	| "kartikmahajan" | "      " | "kartik's password" |


Scenario Outline: try form without an email
	When I register for <username> and <password> and <email>
	And I press Register
	Then I should be on the Register Page

	Examples:
	| username | password | email |
	| "ericdchoi" | "eric's password" | "" |
	| "kartikmahajan" | "kartik's password" | "   " |



