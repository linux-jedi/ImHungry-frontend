Given(/^I am on the Search Page of the I'm Hungry website$/) do
  visit 'localhost:8080/search.jsp'
end

Given(/^I just started the server$/) do
  visit 'localhost:8080'
end

When(/^I search for "([^"]*)" from the search page$/) do |arg1|
  visit 'localhost:8080/search.jsp'
  fill_in 'q', :with => arg1
  fill_in 'num', :with => 5
  click_on('Feed Me!')

end

When(/^I search for "([^"]*)"$/) do |arg1|
  fill_in 'q', :with => arg1
end

When(/^I search for "([^"]*)" in the number box$/) do |arg1|
  fill_in 'num', :with => arg1
end

When(/^I hover over the number field$/) do
  find('.numberfood').hover
end

When(/^I press Submit$/) do
  click_on('Feed Me!')
end

Then(/^I should see a tooltip$/) do
 assert_text("Number of items to show in results ")
end

Then(/^I should be on the Results Page for "([^"]*)" with "([^"]*)"$/) do |arg1, arg2|
  expect(page).to have_current_path('/Search?q='+arg1+'&num='+arg2)
end

Then(/^I should see the Search Page$/) do
  expect(page).to have_title("I'm Hungry")
end

Then(/^I should see a white smoke background$/) do
 color = find('body').native.css_value('background-color')
 expect(color).to eq('rgba(245, 245, 245, 1)')
end

Then(/^I should see a I'm Hungry title$/) do
#3em is 48px in Chrome
 fontsize = find('h1', text: "I'm Hungry").native.css_value('font-size')
 assert_text("I'm Hungry") and expect(fontsize).to be >('16px')
end

Then(/^I should see a text field for food$/) do
 expect(page.has_field?('q',with: 'Enter Food', type: text))
end

Then(/^I should see a field for number$/) do
 expect(page.has_field?('num', with: '5', type: 'number'))
end

Then(/^I should see a submit button$/) do
 expect(page.has_button?('Feed Me!'))
end

