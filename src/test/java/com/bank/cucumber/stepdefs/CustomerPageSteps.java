package com.bank.cucumber.stepdefs;

import com.bank.pages.AccountPage;
import com.bank.pages.CustomerLoginPage;
import com.bank.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 * Created By Bhavesh
 */
public class CustomerPageSteps {
    @When("^I click on customer login tab$")
    public void iClickOnCustomerLoginTab() {
        new HomePage().clickOnCustomerLoginTab();
    }
    @And("^I select customer name \"([^\"]*)\"$")
    public void iSelectCustomerName(String name)  {
        new CustomerLoginPage().selectYourName(name);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new CustomerLoginPage().clickOnLoginButton();
    }

    @And("^I verify logout button is displayed$")
    public void iVerifyLogoutButtonIsDisplayed() {
        new AccountPage().isLogoutButtonDisplayed();
    }

    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new AccountPage().clickOnLogoutButton();
    }

    @Then("^I should see your name lable is displayed$")
    public void iShouldSeeYourNameLableIsDisplayed() {
        Assert.assertTrue(new CustomerLoginPage().isYourNameLabelDisplayed());
    }

    @And("^I click on deposit button$")
    public void iClickOnDepositButton() {
        new AccountPage().clickOnDepositTab();
    }

    @And("^I enter amount \"([^\"]*)\"$")
    public void iEnterAmount(String amount) {
        new AccountPage().enterAmount(amount);

    }

    @And("^I click on deposit wihtdraw button$")
    public void iClickOnDepositWihtdrawButton() {
        new AccountPage().clickOnDepositWithdrawButton();
    }

    @Then("^I verifty depsit successful message displayed on the screen$")
    public void iVeriftyDepsitSuccessfulMessageDisplayedOnTheScreen() {
        Assert.assertEquals(new AccountPage().getErrorSuccessMessage(),"Deposit Successful");
    }
}
