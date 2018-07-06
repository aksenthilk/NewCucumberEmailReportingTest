package TestRunner;

import java.io.File;

import org.apache.logging.log4j.core.appender.FileManager;
import org.junit.AfterClass;

import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(features="G:\\SeleniumCucumberWorkSpace\\Yahoo\\src\\main\\java\\FeatureFile\\Login.feature",
                 glue = {"StepDefinitions"},
                 plugin = {"pretty","html:target/myreport","json:target\\json\\output.json","com.cucumber.listener.ExtentCucumberFormatter:output/report.html"},
                 dryRun = false
                 //,tags={"@Justanswer"}
                )

public class RunnerTest{
	

}
