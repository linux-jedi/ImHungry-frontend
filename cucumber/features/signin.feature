Feature:
	Login to website

Background: 
	Given I am on the SignIn page of the I'm Hungry website

Scenario: page design
	Then I should see a text field for username
	And I should see a text field for password
	And I should see a submit button

Scenario Outline: try form with well formed inputs
	When I type in for <username>
	And I type in for <password>
	And I press Submit
	Then I should be on the Search Page

	Examples:
	| username | password |
	| "ericdchoi" | "eric's password" |
	| "kartikmahajan" | "kartik's password" |

Scenario Outline: try form without a username
	When I type in for <password>
	And I press Submit
	Then I should be on the Login Page
	
	Examples:
	| username | password |
	| "    " | "eric's password" |
	| "" | "kartik's password" |

Scenario Outline: try form without a password
	When I type in for <username>
	And I press Submit
	Then I should be on the Login Page
	
	Examples:
	| username | password |
	| "ericdchoi" | "" |
	| "kartikmahajan" | "    " |


Scenario Outline: try form with a invalid password and username
	When I type in for <username>
	And I type in for <password>
	And I press Submit
	Then I should be on the Login Page
	Examples:
	| username | password |
	| "ericdchoi" | "kartik's password" |
	| "kartikmahajan" | "eric's password" |




