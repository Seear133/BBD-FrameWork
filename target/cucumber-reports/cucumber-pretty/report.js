$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RetailPage.feature");
formatter.feature({
  "line": 2,
  "name": "Retail Website Features",
  "description": "",
  "id": "retail-website-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2922339200,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "# every feature file starts with feature: and then name of feature file"
    },
    {
      "line": 6,
      "value": "# Every scenario start with scenario : and then the name of the test case we want to automate"
    },
    {
      "line": 7,
      "value": "# Gherkin keywords are Given and When Then"
    },
    {
      "line": 8,
      "value": "# Given is a precondition"
    },
    {
      "line": 9,
      "value": "# When is an action taken"
    },
    {
      "line": 10,
      "value": "# Then is an expected result (we write for validation)"
    },
    {
      "line": 11,
      "value": "# And is repeating an action or can be used follwing Given keyworkd as well"
    },
    {
      "line": 12,
      "value": "# But is used for negative scenarios verfication"
    }
  ],
  "line": 14,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 15,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2664894700,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Register an Account Test case",
  "description": "",
  "id": "retail-website-features;register-an-account-test-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "User click on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User click on Register option",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User fill the registration from with Below information",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "Telephone",
        "password",
        "confirmpPassword",
        "subscribe"
      ],
      "line": 49
    },
    {
      "cells": [
        "Alex",
        "Jason",
        "Jt@gmail.com",
        "1012026633",
        "test",
        "test",
        "no"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User accept the privacy and policy",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "User should be registered in Retail Website",
  "keyword": "Then "
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 806018800,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_Register_option()"
});
formatter.result({
  "duration": 28400,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_fill_the_registration_from_with_Below_information(DataTable)"
});
formatter.result({
  "duration": 1099000,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_accept_the_privacy_and_policy()"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_Continue_button()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_should_be_registered_in_Retail_Website()"
});
formatter.result({
  "duration": 31400,
  "status": "passed"
});
formatter.after({
  "duration": 890299300,
  "status": "passed"
});
});