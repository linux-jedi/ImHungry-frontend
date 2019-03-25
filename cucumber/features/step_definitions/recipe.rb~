Given(/^I am on the Recipe Page of the I'm Hungry website$/) do
	visit('localhost:8080/recipe_info.jsp')
end

Then(/^I should see the prep time$/) do
	assert_text('Prep time')
end

Then(/^I should see the cook time$/) do
	assert_text('Cook time')
end

Then(/^I should see the dish image$/) do
	page.should have_css('img')
end

Then(/^I should see the ingredients title$/) do
	assert_text('Ingredients')
end

Then(/^I should see the instructions title$/) do
	assert_text('Instructions')
end

Given(/^I am on the Recipe page for recipe "([^"]*)" from search "([^"]*)" with count "([^"]*)"$/) do |arg1, arg2, arg3|
	visit 'localhost:8080/Search?q='+arg2+'&num='+arg3
	visit 'localhost:8080/RecipeInfo?id='+arg1 
end

Then(/^I should see recipe title "([^"]*)"$/) do |arg1|
	assert_text(arg1)
end

Then(/^I should see image "([^"]*)"$/) do |arg1|
	expect(page).to have_css("img[src*='"+arg1+"']")
end

Then(/^I should see prep "([^"]*)" and cook "([^"]*)" times$/) do |arg1, arg2|
	assert_text(arg1)
	assert_text(arg2)
end

Then(/^I should see ingredients "([^"]*)" and "([^"]*)" and "([^"]*)"$/) do |string, string2, string3|
	assert_text(string)
	assert_text(string2)
	assert_text(string3)
end

Then(/^I should see instructions "([^"]*)" and "([^"]*)"$/) do |arg1, arg2|
	assert_text(arg1)
	assert_text(arg2)
end
