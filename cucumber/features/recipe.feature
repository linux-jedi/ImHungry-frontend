Feature:
	View recipe details page
	
Background:
	Given I am on the Recipe Page of the I'm Hungry website
	
Scenario: General page design
	Then I should see a white smoke background
	And I should see the Printable Version button
	And I should see the Back to Results button
	And I should see the Add to List button
	And I should see the prep time
	And I should see the cook time
	And I should see the ingredients title
	And I should see the instructions title
	
Scenario: Dropdown default
	Then I should see a blank dropdown as default

Scenario: Dropdown options
	When I click on the dropdown
	Then I should see the different lists
	
Scenario Outline: Page info for specific recipe
	Given I am on the Recipe page for recipe <id> from search <food> with count <count>
	Then I should see recipe title <dish>
	And I should see image <imgSrc>
	And I should see prep <prep> and cook <cook> times
	
	Examples:
	| food | count | id | dish | prep | cook | imgSrc |
	| "pizza" | "5" | "1071372" | "Breakfast Pizza" | "10 minutes" | "15 minutes" | "https://spoonacular.com/recipeImages/1071372-312x231.jpg" |
	
Scenario Outline: check ingredients and instructions
	Given I am on the Recipe page for recipe <id> from search <food> with count <count>
	Then I should see ingredients <i1> and <i2> and <i3>
	Then I should see instructions <I1> and <I2>
	
	Examples:
	| food | count | id | i1 | i2 | i3 | I1 | I2 | 
	| "bagel" | "2" | "273654" | "1 bagel" | "1/2 cup banana" | "1/2 cup cottage cheese" | "Spread bagel halves with cottage cheese." | "Sprinkle with cinnamon sugar; top with bananas." |

Scenario Outline: Selecting Back to Results
	Given I am on the Recipe page for recipe <id> from search <food> with count <count>
	And I select the Back to Results button
	Then I should see the Results Page for <food> 
	And I should see <count> items for recipe and restaurants
	
	Examples:
	| food | count | id | 
	| "pizza" | "2" | "1071372" |
	
Scenario Outline: Selecting Printable Version
	Given I am on the Recipe page for recipe <id> from search <food> with count <count>
	And I select the Printable Version button
	Then the page should be a printable version
	
	Examples:
	| food | count | id | 
	| "pizza" | "2" | "1071372" |

Scenario Outline: Adding a recipe to a list 
	Given I am on the Recipe page for recipe <id> from search <food> with count <count> 
	When I select <list> in the dropdown
	And I select the Add to List button
	Then I should see item <name> in list <list>
	
	Examples:
	| food | count | id | name | list |
	| "pizza" | "5" | "1071372" | "Breakfast Pizza" | "Favorites" |
	| "bagel" | "2" | "273654" | "Morning Bagel" | "Do Not Show" |
	| "tacos" | "2" | "1078156" | "Breakfast Tacos" | "To Explore" |

	
