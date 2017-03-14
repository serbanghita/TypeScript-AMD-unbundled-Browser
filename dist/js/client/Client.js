define(["require", "exports"], function (require, exports) {
    "use strict";
    var Client = (function () {
        function Client(utils) {
            this.utils = utils;
        }
        Client.prototype.hello = function () {
            document.body.innerHTML = "Hello there " + this.utils.randomInt(0, 100);
        };
        return Client;
    }());
    exports.Client = Client;
});
