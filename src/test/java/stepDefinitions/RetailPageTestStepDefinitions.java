package stepDefinitions;


import org.junit.Assert;

import core.Base;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.LoginPageObj;
import pageObjects.RetailPageObj;
import utilities.WebDriverUtility;
 
public class RetailPageTestStepDefinitions extends Base { 

	// in this class we will write actual Java/Selenuim codes associated to each
	// Scenario
	// Steps
	//

	RetailPageObj retailPage = new RetailPageObj();

	@When("^User search for '(.+)'$")
	public void user_search_for_iphone(String value) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
        retailPage.enterValueToSearchBar(value); 
        logger.info("User entered value in search bar");
        WebDriverUtility.screenShot();
	}

	@When("^User click on search button$")
	public void user_click_on_search_button() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
        retailPage.clickOnSearchButton();
        logger.info("User clicked on search button");
	}

	@Then("^User should see Iphone image$")
	public void user_should_see_Iphone_image() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
        Assert.assertTrue(retailPage.iPhoneImageIsDisplayed());
        WebDriverUtility.screenShot();
        logger.info("iPhone image is displayed");  
	}
	
	@When("^User click on MyAccount$")
	public void user_click_on_MyAccount() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	
	}

	@When("^User click on Register option$")
	public void user_click_on_Register_option() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

	}

	@When("^User fill the registration from with Below information$")
	public void user_fill_the_registration_from_with_Below_information(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	
	}

	@When("^User accept the privacy and policy$")
	public void user_accept_the_privacy_and_policy() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

	}

	@When("^User click on Continue button$")
	public void user_click_on_Continue_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	
	}

	
	@Then("^User should be registered in Retail Website$")
	public void user_should_be_registered_in_Retail_Website() throws Throwable {

		
	}
	
	
}