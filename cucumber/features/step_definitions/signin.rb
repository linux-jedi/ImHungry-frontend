Given("I am on the SignIn page of the I'm Hungry website") do
  visit 'localhost:3000/SignIn'
end

Then("I should see a text field for username") do
  expect(page.has_field?('username', type: text))
end

Then("I should see a text field for password") do
  expect(page.has_field?('password', type: text))
end

When("I search for {string} and {string}") do |string, string2|
  visit 'localhost:3000/SignIn'
  fill_in 'username', :with => string
  fill_in 'password', :with => string2
end
When("I press Sign In") do
  click_button("login")
  expect(page).to have_no_css('#login', wait: 10)
end
When("I search in for {string} and {string}") do |string, string2|
  visit 'localhost:3000/SignIn'
  fill_in 'password', :with => string
  fill_in 'username', :with => string2
end

Then("I should be on the Login Page") do
  expect(page).to have_current_path(/SignIn/)
end

Then("I should see a register button") do
  expect(page.has_button?('#register'))
end

Then("I should see a signin button") do
  expect(page.has_button?('#login'))
end