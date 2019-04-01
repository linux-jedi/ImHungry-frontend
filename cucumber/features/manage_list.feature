Feature:
	Manage "To Explore", "Do Not Show", and "Favorites" lists

Background: 
	Given I am on the Lists Page of the I'm Hungry website

Scenario: General page design
	Then I should see a white smoke background
	Then I should see a title of Favorite
	And I should see the Manage List button
	And I should see a Manage List dropdown, including all lists except current list
	And I should see a Return To Results button
	And I should see a Return To Search button

Scenario: Dropdown Options
	Then I should see a blank dropdown as default
	Then I should see different lists, not including current list

	
Scenario Outline: page design for a specific outline
	Given I am on a valid signin
	Given I am on the Restaurant page for restaurant <id> from search <food> with count <numresult> 
	When I select <list> in the dropdown
	And I select the Add to List button
	Then I should see item <name> in list <list>
	
	Examples:
	| food | numresult | id | name | list |
	| "pizza" | "5" | "16836104" | "The Pizza Studio" | "Favorites" |
	| "tacos" | "2" | "16822993" | "Taco Bell" | "Do Not Show" |
	| "pizza" | "2" | "16836104" | "The Pizza Studio" | "To Explore" |

	
Scenario: Move List Item
	Given Favorites is shown
	Then I should be able to move <list_item> to Do Not Show 

Scenario: Remove List Item
	Given Favorites is shown
	Then I should be able to remove Item from Favorites
