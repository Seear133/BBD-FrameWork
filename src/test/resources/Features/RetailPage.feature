
Feature: Retail Website Features


# every feature file starts with feature: and then name of feature file 
# Every scenario start with scenario : and then the name of the test case we want to automate
# Gherkin keywords are Given and When Then
# Given is a precondition
# When is an action taken
# Then is an expected result (we write for validation)
# And is repeating an action or can be used follwing Given keyworkd as well
# But is used for negative scenarios verfication

Background: 
 Given User is on Retail website

 
 
@Test
Scenario: Search functionality test case 
     
      When User search for 'iphone'
      And User click on search button
      Then User should see Iphone image 

# In scenario Outline we can run the same scenario with mulitpe set of data
# we will use Example keywor to pass differnt data

Scenario Outline: Test Search functionality with multiple set of Data
     
         When User search for '<itemName>'
         And User click on search button
  # every scenario outline follow with exmaples keyword under Examples keyword we placed the data inside the pipes
  # and we can seperetate column with pipes 
         Examples:
         
         |itemName|
         |iphone|
         |mac book|
         |canon|
         
@RegTest
Scenario: Register an Account Test case 

     When User click on MyAccount
     And User click on Register option
     And User fill the registration from with Below information
     
     |firstName|lastName|email|Telephone|password|confirmpPassword|subscribe|
     |Alex|Jason|Jt@gmail.com|1012026633|test|test|no|
		 And User accept the privacy and policy 
		 And User click on Continue button
		 Then User should be registered in Retail Website
     
     
     
     
     
     
     
     
     









        

