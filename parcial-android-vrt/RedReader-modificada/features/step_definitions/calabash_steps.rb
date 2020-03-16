require 'calabash-android/calabash_steps'

Then /^I press by text "([^\"]*)"$/ do |identifier|
    tap_when_element_exists("* text:'#{identifier}'")
  end

