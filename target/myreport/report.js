$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/SeleniumCucumberWorkSpace/Yahoo/src/main/java/FeatureFile/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Yahoo Login",
  "description": "",
  "id": "yahoo-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 29490122938,
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
  "duration": 12485349604,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_submits_the_name(DataTable)"
});
formatter.result({
  "duration": 2646376421,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_submits_the_invalid_password(DataTable)"
});
formatter.result({
  "duration": 42675759287,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@id\u003d\u0027login-signinn\u0027]\"}\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.04 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LAPTOP-VDF4BQTI\u0027, ip: \u0027192.168.1.208\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73), userDataDir\u003dC:\\Users\\Senthil\\AppData\\Local\\Temp\\scoped_dir9104_29618}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d67.0.3396.99, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 2830ff6d931b4a9ab0efceec10fcf453\n*** Element info: {Using\u003dxpath, value\u003d//button[@id\u003d\u0027login-signinn\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat StepDefinitions.Steps.user_submits_the_invalid_password(Steps.java:109)\r\n\tat ✽.Then user submits the invalid password(G:/SeleniumCucumberWorkSpace/Yahoo/src/main/java/FeatureFile/Login.feature:9)\r\n",
  "status": "failed"
});
formatter.write("Scenario is finished");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1459876433,
  "status": "passed"
});
formatter.before({
  "duration": 6674800517,
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
  "duration": 11624706155,
  "status": "passed"
});
formatter.match({
  "location": "Steps.clicks_on_Home_Link()"
});
formatter.result({
  "duration": 7722363649,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_lands_on_Home_page()"
});
formatter.result({
  "duration": 3016340603,
  "status": "passed"
});
formatter.after({
  "duration": 2777013569,
  "status": "passed"
});
formatter.before({
  "duration": 4753129178,
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
  "duration": 18188249185,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_clicks_on_continue_button()"
});
formatter.result({
  "duration": 544812497,
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
  "duration": 276846857,
  "status": "passed"
});
formatter.after({
  "duration": 269572139,
  "status": "passed"
});
});