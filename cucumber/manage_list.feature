Feature:
	Manage "To Explore", "Do Not Show", and "Favorites" lists

Background: 
	Given I am on the Lists Page of the I'm Hungry website

Scenario: General page design
	Given I am on a valid signin
	Then I should see a title of Favorite
Scenario: Dropdown Options
	Given I am on a valid signin
	Then I should see a blank dropdown as default
	Then I should see different lists, not including current list

Scenario: Move List Item
  Given I am on a valid signin
  Given Favorites is shown
  Then I should be able to move <list_item> to Do Not Show 

Scenario: Remove List Item
  Given I am on a valid signin
  Given Favorites is shown
  Then I should be able to remove Item from Favorites
