$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/SeleniumCucumberWorkSpace/Yahoo/src/main/java/FeatureFile/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Yahoo Login",
  "description": "",
  "id": "yahoo-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 26520429600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate Invalid Password",
  "description": "",
  "id": "yahoo-login;validate-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Yahoo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Yahoo Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user submits the name",
  "rows": [
    {
      "cells": [
        "useryahooemailid"
      ],
      "line": 7
    },
    {
      "cells": [
        "aksenthil2002@yahoo.co.in"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user submits the invalid password",
  "rows": [
    {
      "cells": [
        "invalidpassword"
      ],
      "line": 10
    },
    {
      "cells": [
        "aksenthilk"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_Yahoo_Login_Page()"
});
formatter.result({
  "duration": 9415021733,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_submits_the_name(DataTable)"
});
formatter.result({
  "duration": 1951029022,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_submits_the_invalid_password(DataTable)"
});
formatter.result({
  "duration": 9680837133,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cYahoo[o]\u003e but was:\u003cYahoo[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefinitions.Steps.user_submits_the_invalid_password(Steps.java:102)\r\n\tat ✽.Then user submits the invalid password(G:/SeleniumCucumberWorkSpace/Yahoo/src/main/java/FeatureFile/Login.feature:9)\r\n",
  "status": "failed"
});
formatter.write("Scenario is finished");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 3386355147,
  "status": "passed"
});
formatter.before({
  "duration": 6670884293,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate Title",
  "description": "",
  "id": "yahoo-login;validate-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@uiPractice"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user is on uipractice page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "clicks on Home Link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user lands on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_is_on_uipractice_page()"
});
formatter.result({
  "duration": 11916273591,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Home_Link()"
});
formatter.result({
  "duration": 18523025648,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_lands_on_Home_page()"
});
formatter.result({
  "duration": 40335980,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cTesting Controls[ ]\u003e but was:\u003cTesting Controls[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefinitions.Steps.user_lands_on_Home_page(Steps.java:131)\r\n\tat ✽.Then user lands on Home page(G:/SeleniumCucumberWorkSpace/Yahoo/src/main/java/FeatureFile/Login.feature:17)\r\n",
  "status": "failed"
});
formatter.write("Scenario is finished");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 4246410556,
  "status": "passed"
});
formatter.before({
  "duration": 4523225704,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login to Justanswer",
  "description": "",
  "id": "yahoo-login;login-to-justanswer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Justanswer"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user in on Justanswer Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user clicks on continue button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user should see the error message \"Enter your question here to continue...\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_in_on_Justanswer_Home_page()"
});
formatter.result({
  "duration": 16675654829,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_continue_button()"
});
formatter.result({
  "duration": 373969473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enter your question here to continue...",
      "offset": 35
    }
  ],
  "location": "Steps.user_should_see_the_error_message(String)"
});
formatter.result({
  "duration": 144074859,
  "status": "passed"
});
formatter.after({
  "duration": 411238880,
  "status": "passed"
});
});