require 'calabash-android/calabash_steps'

Then /^I press on exists button "([^\"]*)"$/ do |text|
    begin
      if(""!= text)  
        tap_when_element_exists("android.widget.Button {text CONTAINS[c] '#{text}'}")
      end
    #raise "No existe "+text
    rescue
        puts "No existe boton "+text
    end
end


Then /^Is background color on "([^\"]*)" text$/ do |text|
   #puts query("* {text CONTAINS[c] '#{text}'}", :getViewColors)
   #puts query("* {text CONTAINS[c] 'nombre'}")
   #puts query("*",:id)
   #puts query("*")
   puts query("android.support.v7.widget.ContentFrameLayout")
   puts query("android.widget.FrameLayout")

   #puts query("*")
   #keyboard_enter_text(text)
   #puts query("* index:5",setText:"user@example.com")
   #puts query("*",:id)
  # puts query("* id:'navigationBarBackground'", :getColors) # setBackgroundColor
   #puts html("*")
end