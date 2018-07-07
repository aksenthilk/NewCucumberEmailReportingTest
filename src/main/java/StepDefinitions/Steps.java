package StepDefinitions;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import com.aventstack.extentreports.ExtentReports;
import com.cucumber.listener.Reporter;
import com.google.common.io.Files;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps {
	WebDriver driver;
	ExtentReports extent;

	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "G:\\chromedriver.exe");
		driver = new ChromeDriver();

	}

	@After()
	public void tearDown(Scenario scenario) {
		Reporter.addScenarioLog("Senthil generated the report");
		System.out.println("Closing the browser");
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.assignAuthor("Senthil");

		if (scenario.isFailed()) {
			scenario.write("Scenario is finished");
			if (scenario.isFailed()) {
				scenario.embed(((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES), "image/png");
				File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
				// File screenFile = new File("output/" +
				// screenshot.pathSeparator);
				File screenFile = new File("output/" + screenshot.getName());
				try {
					Files.copy(screenshot, screenFile);
				} catch (IOException e) {
					e.printStackTrace();
				}
				try {
					Reporter.addScreenCaptureFromPath(screenFile.getName());
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}

		driver.close();
		// extent.flush();

	}

	@Given("^User is on Yahoo Login Page$")
	public void user_is_on_Yahoo_Login_Page() throws Throwable {
		// ExtentTest logger = extent.createTest("Yahoo");
		// logger.log(Status.INFO, "Login to Yahoo");
		driver.get("https://login.yahoo.com/");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		System.out.println("Login Page is displayed");

	}

	@When("^user submits the name$")
	public void user_submits_the_name(DataTable data) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		List<List<String>> nameData = data.raw();
		String name = nameData.get(1).get(0);
		System.out.println(name);
		driver.findElement(By.xpath("//input[@name='username']")).sendKeys(name);
		driver.findElement(By.xpath("//input[@name='signin']")).click();

	}

	@Then("^user submits the invalid password$")
	public void user_submits_the_invalid_password(DataTable data) throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		// For automatic transformation, change DataTable to one of
		// List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		// E,K,V must be a scalar (String, Integer, Date, enum etc)
		Thread.sleep(3000);
		////Assert.assertEquals("Yahoo", driver.getTitle());

		List<List<String>> passData = data.raw();
		String password = passData.get(1).get(0);
		System.out.println(password);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
		////driver.findElement(By.xpath("//button[@id='login-signin']")).click();
		driver.findElement(By.xpath("//button[@id='login-signinn']")).click();
		Thread.sleep(4000);

	}

	@Given("^user is on uipractice page$")
	public void user_is_on_uipractice_page() throws Throwable {
		// ExtentTest logger = extent.createTest("uipractice");
		// logger.log(Status.INFO, "Login to uipractice");
		Thread.sleep(3000);
		driver.get("http://www.uitestpractice.com/");
		Thread.sleep(3000);

	}

	@When("^clicks on Home Link$")
	public void clicks_on_Home_Link() throws Throwable {
		driver.findElement(By.xpath("//a[text()='Home']")).click();
		Thread.sleep(3000);
	}

	@Then("^user lands on Home page$")
	public void user_lands_on_Home_page() throws Throwable {
		////Assert.assertEquals("Testing Controls ", driver.getTitle());
		Thread.sleep(3000);
		System.out.println("The page title is: "+driver.getTitle());

	}

	@Given("^user in on Justanswer Home page$")
	public void user_in_on_Justanswer_Home_page() throws Throwable {
		// ExtentTest logger = extent.createTest("Justanswer");
		// logger.log(Status.INFO, "Login to Justanswer");
		Thread.sleep(3000);
		driver.get("http://www.justanswer.com");
		Thread.sleep(4000);
	}

	@When("^user clicks on continue button$")
	public void user_clicks_on_continue_button() throws Throwable {
		driver.findElement(By.xpath("//button[text()='Continue']")).click();
	}

	@Then("^user should see the error message \"([^\"]*)\"$")
	public void user_should_see_the_error_message(String message) throws Throwable {
		String error = driver.findElement(By.xpath("//div[text()='Enter your question here to continue...']"))
				.getText();
		System.out.println("The error shown is: "+error);
		//Assert.assertEquals(message, error);
	}

}
