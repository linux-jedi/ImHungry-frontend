Feature:
	Register a username and password to the I'm Hungry website

Background: 
	Given I am on the Register page of the I'm Hungry website

Scenario: page design
	Then I should see a text field for username
	And I should see a text field for password
	And I should see a text field for email
	And I should see a submit button

Scenario Outline: try form with well formed inputs
	When I type in for <username>
	And I type in for <password>
	And I type in for <email>
	And I press Submit
	Then I should be on the Search Page

	Examples:
	| username | password | email |
	| "ericdchoi" | "eric's password" | "eric's email" |
	| "kartikmahajan" | "kartik's password" | "kartik's password" |

Scenario Outline: try form without a username
	When I type in for <email>
	And I type in for <password>
	Then I should be on the Register Page
	
	Examples:
	| username | password | email |
	| "" | "eric's password" | "eric's email" |
	| "       " | "kartik's password" | "kartik's password" |

Scenario Outline: try form without a password
	When I type in for <username>
	And I type in for <email>
	Then I should be on the Register Page

	Examples:
	| username | password | email |
	| "ericdchoi" | "" | "eric's email" |
	| "kartikmahajan" | "      " | "kartik's password" |


Scenario Outline: try form without an email
	When I type in for <username>
	And I type in for <password>
	Then I should be on the Register Page

	Examples:
	| username | password | email |
	| "ericdchoi" | "eric's password" | "" |
	| "kartikmahajan" | "kartik's password" | "   " |



