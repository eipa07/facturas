/*global QUnit*/

sap.ui.define([
    "com/sapui5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
], function (mockServer, opaQunit, HelloPanel) {
    "use strict";

    QUnit.module("Navigation Journey");

    opaQunit("Should see the initial page of the app", function (Given, When, Then) {

        //Initialize mockServer
        mockServer.init();


        // Arrangements
        Given.iStartMyUIComponent({
            componentConfig: {
                name: "com.sapui5"
            }
        });

        //Actions
        When.onTheAppPage.iSayHelloDialogButton();

        // Assertions
        Then.onTheAppPage.iSeeHelloDialogButton();

        //Cleanup
        Then.iTeardownMyApp();
    });
});
