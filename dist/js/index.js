define(["require", "exports", "./client/Client", "./common/Utils"], function (require, exports, Client_1, Utils_1) {
    "use strict";
    var u = new Utils_1.Utils();
    var c = new Client_1.Client(u);
    c.hello();
});
