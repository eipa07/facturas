/* eslnt-disable no-undef */
//@ts-nocheck
sap.ui.define([
    "com/sapui5/model/InvoicesFormatter",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * 
     */

    function (InvoicesFormatter, ResourceModel) {

        QUnit.module("Qnvoices Status", {
            beforeEach: function () {
                this._oResourceModel = new ResourceModel({
                    bundleUrl: sap.ui.require.toUrl("com/sapui5") + "/i18n/i18n.properties"
                });
            },

            afterEach: function () {
                this._oResourceModel.destroy();
            }

        });


        QUnit.test("Should return the Invoice status", function (assert) {

            let oModel = this.stub();

            oModel.withArgs("i18n").returns(this._oResourceModel);

            let oViewStub = {
                getModel: oModel
            };

            let oControlerStub = {
                getView: this.stub().returns(oViewStub)
            };


            let fnIsolatedFormatter = InvoicesFormatter.invoicesStatus.bind(oControllerStub);


            //Assert
            assert.strictEqual(fnIsolatedFormatter("A"), "New", "Status A is correct");
            assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "Status B is correct");
            assert.strictEqual(fnIsolatedFormatter("C"), "Done", "Status C is correct");



        });





    }

)