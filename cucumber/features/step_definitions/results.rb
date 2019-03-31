Given(/^I am on the Results Page of the I'm Hungry website$/) do
  visit 'localhost:3000/Results'
end

Then(/^I should see the Manage List button$/) do
   expect(page.has_button?('Manage List'))
end

Then(/^I should see a Return To Search button$/) do
   expect(page.has_button?('Return to Search'))
end

Then(/^I should see the Restaurant and Recipe titles$/) do
  visit 'localhost:3000/Search'
  fill_in 'query', :with => 'burger'
  fill_in 'amount', :with => 5
  find('#pik').click
  fontsize1 = find_by_id('reshead').native.css_value('font-size')
  fontsize2 = find_by_id('rechead').native.css_value('font-size')
  assert_text('Restaurant') and assert_text('Recipe') and expect(fontsize1).to eq(fontsize2) and expect(fontsize1).to be >('20px')
end

Then(/^I should see a blank dropdown as default$/) do
  expect(page.find_by_id('resdrop').value =='')
end

When(/^I click on the dropdown$/) do
  find_by_id('resdrop').click()
end

Then(/^I should see the different lists$/) do
  assert_text('Favorites') and assert_text('Do Not Show') and assert_text('To Explore')
end

Given(/^I am on the Result page for a "([^"]*)" with "([^"]*)" results$/) do |arg1, arg2|
  visit 'localhost:3000/Search'
  fill_in 'query', :with => arg1
  fill_in 'amount', :with => 5
  find('#pik').click
end

Then(/^I should see "([^"]*)" items for recipe and restaurants$/) do |arg1|
  expect(page).to have_css('td.restaurantCell', count: arg1) 
end

Then(/^I should see "([^"]*)" restaurant names$/) do |arg1|
  expect(page).to have_css('td.restaurantName', count: arg1) 
end

Then(/^I should see "([^"]*)" restaurant address$/) do |arg1|
  expect(page).to have_css('td.address', count: arg1) 
end

Then(/^I should see "([^"]*)" minutes of driving to get to the restaurant$/) do |arg1|
  expect(page).to have_css('td.driving', count: arg1) 
end

Then(/^I should see "([^"]*)" price of the restaurant$/) do |arg1|
  expect(page).to have_css('td.price', count: arg1) 
end

Then(/^I should see "([^"]*)" recipe name$/) do |arg1|
  expect(page).to have_css('td.recipeName', count: arg1) 
end

Then(/^I should see "([^"]*)" cook and prep time of the recipe$/) do |arg1|
  expect(page).to have_css('td.preptime', count: arg1) and   expect(page).to have_css('td.cooktime', count: arg1) 
end

When(/^I select the restaurant "([^"]*)" result$/) do |arg1|
 find('.restaurantName', :text => arg1).click
end

When(/^I select the recipe "([^"]*)" result$/) do |arg1|
 find('.recipeName', :text => arg1).click
end

Then(/^I should see the Result Page the restaurant "([^"]*)" result$/) do |arg1|
  assert_text(arg1) and  expect(page).to have_current_path(/\/RestaurantInfo(.*)/)
end


Then(/^I should see the Result Page for the recipe "([^"]*)" result$/) do |arg1|
  assert_text(arg1) and expect(page).to have_current_path(/\/RecipeInfo(.*)/)
end

When(/^the dropdown is blank$/) do
 select('', from: 'list')
end

When(/^I select the Manage List button$/) do
  click_on('Manage List')
end

Then(/^I remain on the Results Page$/) do
  expect(page).to have_current_path('/results.jsp')
end

When(/^I select "([^"]*)" in the dropdown$/) do |arg1|
  select(arg1, from: 'list')
end

Then(/^I should be on the Manage List Page for "([^"]*)"$/) do |arg1|
  expect(page.current_path).to match('/UserList') and assert_text(arg1)
end

When(/^I click on Return to Search Page$/) do
  click_on('Return to Search')
end

Then(/^I should be on the Search Page$/) do
  expect(page).to have_current_path('/Search')
end


Then(/^I should see restaurant "([^"]*)" at the top of the list$/) do |arg1|
  first('td.restaurantName').assert_text(arg1)
end

Then(/^I should see recipe "([^"]*)" at the top of the list$/) do |arg1|
  first('td.recipeName').assert_text(arg1)
end

Then(/^I should not see "([^"]*)"$/) do |arg1|
  assert_no_text(arg1)
end


Then(/^I should see buttons on the bottom$/) do
	assert_text('1') and expect(page).to have_css('li.previous', count: 1) and expect(page).to have_css('li.next', count: 1)
end


When(/^I press the next button$/) do
  find('li.next').click
end

