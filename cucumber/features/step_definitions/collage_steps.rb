Then(/^I should see ten pictures$/) do
  expect(page).to have_css('img.image', count: 10, wait: 5) 
end

Then(/^the width of the collage must be a certain percentage of the browser$/) do
 window_width = Capybara.current_session.current_window.size[0]
 window_width_min = window_width * 0.4;
 window_width_max = window_width * 0.6;
 width = find('div#collage').native.css_value('width').split("px")
 width = width[0].to_f
 expect(width).to be_between(window_width_min, window_width_max).inclusive
end


Then(/^the height must be a certain percentage of the browser$/) do
 window_height = Capybara.current_session.current_window.size[1]
 window_height_min = window_height * 0.35;
 window_height_max = window_height * 0.5;
 height = find('div#collage').native.css_value('height').split("px")
 height = height[0].to_f
 expect(height).to be_between(window_height_min, window_height_max).inclusive
end
