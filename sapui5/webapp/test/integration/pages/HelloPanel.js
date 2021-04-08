// @ts-nocheck
sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
    "use strict";
    var sViewName = "HelloPanel";
    Opa5.createPageObjects({
        onTheAppPage: {

            actions: {
                iSayHelloDialogButton: function () {
                    return this.waitFor({
                        id: "HelloDialogButton",
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Did not find the " + sViewName + " view"
                    });
                }
            },

            assertions: {

                iSeeHelloDialogButton: function () {
                    return this.waitFor({
                        controlType: "sap.m.Dialog",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
                        },
                        errorMessage: "Did not find the " + sViewName + " view"
                    });
                }
            }
        }
    });

});
