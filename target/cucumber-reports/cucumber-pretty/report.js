$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Users.feature");
formatter.feature({
  "line": 2,
  "name": "Users Function",
  "description": "In order to avoid silly mistakes\r\nAs a math idiot\r\nI want to be told the sum of two numbers",
  "id": "users-function",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Users"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "The user searches name",
  "description": "",
  "id": "users-function;the-user-searches-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SearchUserPage"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I open the users page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter the name \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I Click the Search Button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The user should be returned",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "users-function;the-user-searches-name;",
  "rows": [
    {
      "cells": [
        "testing",
        "name"
      ],
      "line": 15,
      "id": "users-function;the-user-searches-name;;1"
    },
    {
      "cells": [
        "valid",
        "John Doe"
      ],
      "line": 16,
      "id": "users-function;the-user-searches-name;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10011406,
  "status": "passed"
});
formatter.before({
  "duration": 4666034215,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "The user searches name",
  "description": "",
  "id": "users-function;the-user-searches-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Users"
    },
    {
      "line": 7,
      "name": "@SearchUserPage"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I open the users page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter the name \"John Doe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I Click the Search Button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The user should be returned",
  "keyword": "And "
});
formatter.match({
  "location": "UsersSteps.iOpenTheUsersPage()"
});
formatter.result({
  "duration": 252428478,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Doe",
      "offset": 18
    }
  ],
  "location": "UsersSteps.iEnterTheName(String)"
});
formatter.result({
  "duration": 328387656,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickTheSearchButton()"
});
formatter.result({
  "duration": 1143436,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.theUserShouldBeReturned()"
});
formatter.result({
  "duration": 150951324,
  "status": "passed"
});
formatter.after({
  "duration": 10211107,
  "status": "passed"
});
formatter.after({
  "duration": 200878699,
  "status": "passed"
});
formatter.before({
  "duration": 575829,
  "status": "passed"
});
formatter.before({
  "duration": 2853897041,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "The user creates new user",
  "description": "",
  "id": "users-function;the-user-creates-new-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@CreateNewUser"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I open the users page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click Add User Button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I add new user",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I verify the user added",
  "keyword": "And "
});
formatter.match({
  "location": "UsersSteps.iOpenTheUsersPage()"
});
formatter.result({
  "duration": 137525,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iClickAddUserButton()"
});
formatter.result({
  "duration": 175595907,
  "status": "passed"
});
formatter.match({
  "location": "UsersSteps.iAddNewUser()"
});
formatter.result({
  "duration": 1778260366,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: Customer Service Manager\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027Vus-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:24:663f:a202:3561%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:209)\n\tat rga.pages.BasePage.selectByValue(BasePage.java:77)\n\tat rga.pages.home.UsersPage.enterAddUserForm(UsersPage.java:73)\n\tat suite.stepdefs.UsersSteps.iAddNewUser(UsersSteps.java:52)\n\tat ✽.Then I add new user(Users.feature:22)\n",
  "status": "failed"
});
formatter.match({
  "location": "UsersSteps.iVerifyTheUserAdded()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 568304629,
  "status": "passed"
});
formatter.after({
  "duration": 150094462,
  "status": "passed"
});
});