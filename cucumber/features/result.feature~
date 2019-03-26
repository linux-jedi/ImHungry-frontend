Feature:
	View restaurant and recipe results

Background: 
	Given I am on the Results Page of the I'm Hungry website

Scenario: General page design
	Then I should see a white smoke background
	And I should see the Manage List button
	And I should see a Return To Search button
	And I should see the Restaurant and Recipe titles


Scenario: Dropdown default
	Then I should see a blank dropdown as default

Scenario: Dropdown options
	When I click on the dropdown
	Then I should see the different lists

Scenario Outline: page design for a specific outline
	Given I am on the Result page for a <food> with <numresults> results
	Then I should see <numresults> items for recipe and restaurants

	Examples:
	| food | numresults |
	| "pizza" | "2" |
	| "korean" | "3" |
	| "tacos" | "5" |



Scenario Outline: Restaurant information
	Given I am on the Result page for a <food> with <numresults> results
	Then I should see <numresults> restaurant names
	And I should see <numresults> restaurant address
	And I should see <numresults> minutes of driving to get to the restaurant
	And I should see <numresults> price of the restaurant

	Examples:
	| food | numresults |
	| "pizza" | "2" |
	| "korean" | "3" |
	| "tacos" | "5" |


Scenario Outline: Recipe information
	Given I am on the Result page for a <food> with <numresults> results
	Then I should see <numresults> recipe name
	And I should see <numresults> cook and prep time of the recipe

	Examples:
	| food | numresults |
	| "pizza" | "2" |
	| "korean" | "3" |
	| "tacos" | "5" |

Scenario Outline: selecting a restaurant result
	Given I am on the Result page for a <food> with <numresults> results
	When I select the restaurant <result> result
	Then I should see the Result Page the restaurant <result> result

	Examples:
	| food | numresults | result |
	| "pizza" | "5" | "Rance's Pizza" |

Scenario Outline: selecting a recipe result
	Given I am on the Result page for a <food> with <numresults> results
	When I select the recipe <result> result
	Then I should see the Result Page for the recipe <result> result

	Examples:
	| food | numresults | result |
	| "pizza" | "5" | "Loaded Olive Pizza" |


Scenario: selecting Manage List with nothing chosen
	When the dropdown is blank
	And I select the Manage List button
	Then I remain on the Results Page

Scenario Outline: selecting Manage List with something chosen
	When I search for <food> from the search page
	And I select <list> in the dropdown
	And I select the Manage List button
	Then I should be on the Manage List Page for <list>
	
	Examples:
	|food | list |
	|"pizza" | "Favorites" |
	|"pizza" | "Do Not Show" |
	|"pizza" | "To Explore" |

Scenario: Selecting Back to Search
	When I click on Return to Search Page
	Then I should be on the Search Page

Scenario Outline: Favorites filtering with Restaurants
	Given I am on the Restaurant page for restaurant <id> from search <food> with count <numresult> 
	When I select <list> in the dropdown
	And I select the Add to List button
 	And I search for <food> from the search page
	Then I should see restaurant <name> at the top of the list 
	
	Examples:
	| food | numresult | id | name | list |
	| "pizza" | "2" | "16836104" | "The Pizza Studio" | "Favorites" |
	| "taco" | "5" | "18543808" | "Holbox" | "Favorites" |

Scenario Outline: Do Not Show filtering with Restaurants
	Given I am on the Restaurant page for restaurant <id> from search <food> with count <numresult> 
	When I select <list> in the dropdown
	And I select the Add to List button
 	And I search for <food> from the search page
	Then I should not see <name>
	
	Examples:
	| food | numresult | id | name | list |
	| "pizza" | "2" | "16836104" | "The Pizza Studio" | "Do Not Show" |
	| "taco" | "5" | "18543808" | "Holbox" | "Do Not Show" |


Scenario Outline: Do Not Show filtering with Recipes
	Given I am on the Recipe page for recipe <id> from search <food> with count <count> 
	When I select <list> in the dropdown
	And I select the Add to List button
 	And I search for <food> from the search page
	Then I should not see <name>
	
	Examples:
	| food | count | id | name | list |
	| "pizza" | "5" | "1071372" | "Breakfast Pizza" | "Do Not Show" |
	| "bagel" | "2" | "273654" | "Morning Bagel" | "Do Not Show" |

Scenario Outline: Favorites filtering with Restaurants
	Given I am on the Recipe page for recipe <id> from search <food> with count <count> 
	When I select <list> in the dropdown
	And I select the Add to List button
 	And I search for <food> from the search page
	Then I should see recipe <name> at the top of the list 
	
	Examples:
	| food | count | id | name | list |
	| "pizza" | "5" | "1071372" | "Breakfast Pizza" | "Favorites" |
	| "bagel" | "2" | "273654" | "Morning Bagel" | "Favorites" |
