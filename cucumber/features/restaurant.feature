Feature:
	View restaurant details page
	
Background:
	Given I am on the Restaurant Page of the I'm Hungry website
	
Scenario: General page design
	Then I should see a white smoke background
	And I should see the Printable Version button
	And I should see the Back to Results button
	And I should see the Add to List button
	And I should see the website link
	And I should see the Address title
	And I should see the Phone Number title
	
Scenario: Dropdown default
	Then I should see a blank dropdown as default

Scenario: Dropdown options
	When I click on the dropdown
	Then I should see the different lists
	
Scenario Outline: Page info for specific restaurant
	Given I am on the Restaurant page for restaurant <id> from search <food> with count <numresults>
	Then I should see name <name>
	And I should see address 
	And I should see phone number
	And I should see the link <linkG> to google maps
	And I should see the link <linkW> to the website
	
	Examples:
		| food | numresults |id | name | linkG | linkW |
		| "pizza" | "2" | "16836104" | "The Pizza Studio" | "https://www.google.com/maps/dir/?api=1&origin=801+Childs+Way+Los+Angeles&destination=3584+South+Figueroa+St++Los+Angeles+90007" | "https://www.zomato.com/los-angeles/the-pizza-studio-exposition-park?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1" |
		| "tacos" | "2" | "16822993" | "Taco Bell" | "https://www.google.com/maps/dir/?api=1&origin=801+Childs+Way+Los+Angeles&destination=3629+South+Vermont+Avenue+90007" | "https://www.zomato.com/los-angeles/taco-bell-1-exposition-park?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1" |
		
Scenario: Selecting Add to List with nothing chosen
	When the dropdown is blank
	And I select the Add to List button
	Then I should remain on the Restaurant Page

Scenario Outline: Adding a restaurant to a list 
	Given I am on the Restaurant page for restaurant <id> from search <food> with count <numresult> 
	When I select <list> in the dropdown
	And I select the Add to List button
	Then I should see item <name> in list <list>
	
	Examples:
	| food | numresult | id | name | list |
	| "pizza" | "5" | "16836104" | "The Pizza Studio" | "Favorites" |
	| "tacos" | "2" | "16822993" | "Taco Bell" | "Do Not Show" |
	| "pizza" | "2" | "16836104" | "The Pizza Studio" | "To Explore" |

Scenario Outline: Selecting Back to Results
	Given I am on the Restaurant page for restaurant <id> from search <food> with count <numresults>
	And I select the Back to Results button
	Then I should see the Results Page for <food> 
	And I should see <numresults> items for recipe and restaurants
	
	Examples:
	| food | numresults | id | 
	| "pizza" | "2" | "16836104" |
	
Scenario: Selecting Printable Version
	Given I am on the Restaurant page for restaurant "16836104" from search "pizza" with count "2" 
	And I select the Printable Version button
	Then the page should be a printable version
