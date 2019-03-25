Feature:
	View collage

Background: 
	Given I am on the Results Page of the I'm Hungry website

Scenario Outline: Collage
	Given I am on the Result page for a <food> with <numresults> results
	Then I should see ten pictures
	And the width of the collage must be a certain percentage of the browser
	And the height must be a certain percentage of the browser


	Examples:
	| food | numresults |
	| "pizza" | "2" |
	| "korean" | "3" |




