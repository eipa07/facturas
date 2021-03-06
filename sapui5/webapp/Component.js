// @ts-nocheck
sap.ui.define([
	"sap/ui/core/UIComponent",
	"com/sapui5/model/models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
], function (UIComponent, Models, ResourceModel, HelloDialog, Device) {
	"use strict";

	return UIComponent.extend("com.sapui5.Component", {

		metadata: {
			manifest: "json"
		},

		 init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(Models.createRecipient());

            // var i18nModel = new ResourceModel({
            //     bundleName: "logaligroup4.sapui54.i18n.i18n"
            // });

            // this.setModel(i18nModel, "i18n");

            //Set device Model
            this.setModel(Models.createDeviceModel(), "device");

            this._helloDialog = new HelloDialog(this.getRootControl());

            // Create the views based on the url/hash
            this.getRouter().initialize();

        },

        exit: function(){
            this._helloDialog.destroy();
        },

        openHelloDialog: function(){
            this._helloDialog.open();
        },

        getContentDensityClass: function() {
                
                if(!Device.support.touch){
                    this._sContentDensityClass = "sapUiSizeCompact";
                }else{
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
                return this._sContentDensityClass;
            }
    })

});
