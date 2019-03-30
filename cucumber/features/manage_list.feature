Feature:
	Manage "To Explore", "Do Not Show", and "Favorites" lists

Background: 
	Given I am on the Lists Page of the I'm Hungry website

Scenario: General page design
	Then I should see a white smoke background
	And I should see a title of <current_list>
	And I should see the Manage List button
	And I should see the Restaurant and Recipe titles for specified List
	And I should see a Manage List dropdown, including all lists except current list
	And I should see a Return To Results button
	And I should see a Return To Search button

Scenario: Dropdown Options
	Then I should see a blank dropdown as default
	Then I should see different lists, not including current list


Scenario: page design for a specific outline
	Given I am on the List management page for a <list> with <list_content> results
	Then I should see <list_content> items for recipe and restaurants

	Examples:
	| Favorite |
	| "pizza" | "2" |
	| "korean" | "3" |
	| "tacos" | "5" |

Scenario: Move List Item
	Given <current_list> is shown
	Then I should be able to move <list_item> to <new_list> 

Scenario: Remove List Item
	Given <current_list> is shown
	Then I should be able to remove <list_item> from <current_list>
