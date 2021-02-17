Feature: DataBase SQL query Feature Scenarios 


@testDB
Scenario: Exectue all information from Actor Table
   Given User connects to PostgresSql DataBase
   When User sends query 'Select * from public.actor' 
   Then User should get all information from that table
  # This line is to be removed
