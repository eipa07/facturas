// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
         * 
         * @param {typeof sap.ui.core.mvc.Controller}           Controller
         * 
         */

    function (Controller) {
		"use strict";

		return Controller.extend("com.sapui5.controller.Main", {
			            onInit: () => {

            },
            onOpenDialog: function (){
                this.getOwnerComponent().openHelloDialog();
                
            },

        });

    });