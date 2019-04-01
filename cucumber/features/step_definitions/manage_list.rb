Given(/^I am on the Lists Page of the I'm Hungry website$/) do
  visit 'localhost:3000/Favorite'
end


And(/^I should see a title of Favorite$/) do
  visit 'localhost:3000/Favorite'
	assert_text('Favorites')
end
And(/^I should see the Manage List button$/) do
   expect(page.has_button?('Manage List'))
end
And(/^I should see a Manage List dropdown, including all lists except current list$/) do
  expect(page.find('#list1drop').value =='blank')
end
And(/^I should see a Return To Results button$/) do
   expect(page.has_button?('Return to Results'))
end
And(/^I should see a Return To Search button$/) do
   expect(page.has_button?('Return to Search'))
end


When(/^I click on the dropdown$/) do
  find('select').click()
end
Then(/^I should see different lists, not including current list$/) do
  assert_text('Do Not Show') and assert_text('To Explore')
end

Given(/^I am on a valid signin$/) do
  # visit 'localhost:3000/Register'
  # fill_in 'username', :with => "test"
  # fill_in 'password', :with => "test1"
  # fill_in 'email', :with => "test@test.com"
  visit 'localhost:3000/SignIn'
  fill_in 'username', :with => "fs"
  fill_in 'password', :with => "fs1"
  click_button("login")
  expect(page).to have_current_path(/Search/)
  visit 'localhost:3000/Favorite'
end

Given(/^I am on the List management page for a <list> with <list_content> results$/) do
  visit 'localhost:3000/Favorite'
end
Then(/^I should see <list_content> items for recipe and restaurants$/) do
  expect(page).to have_css('td.restaurantCell', count: 1) 
  expect(page).to have_css('td.recipeCell', count: 1) 
end

Given(/^Favorites is shown$/) do
  visit 'localhost:3000/Favorite'
  assert_text('Favorites')
end
Then(/^I should be able to move <list_item> to Do Not Show$/) do
  visit 'localhost:3000/Favorite'
  assert_text('move')
end


Then(/^I should be able to remove Item from Favorites$/) do
  assert_text('remove')
end





  

  


  
# Scenario Outline: page design for a specific outline
#   Given I am on a valid signin
#   Given I am on the Restaurant page for restaurant <id> from search <food> with count <numresult> 
#   When I select <list> in the dropdown
#   And I select the Add to List button
#   Then I should see item <name> in list <list>
  
#   Examples:
  
#   | food | numresult | id | name | list |
#   | "burger" | "5" | "ChIJRaPCphDHwoARRKD4kcOtCA0" | "The Habit Burger Grill" | "Favorites" |
#   | "burger" | "5" | "ChIJj8k3FDnGwoARYPPFbgkxVqQ" | "Umami Burger Arts District" | "Do Not Show" |
#   | "burger" | "5" | "219871" | "Halloumi aubergine burgers with harissa relish" | "To Explore" |



