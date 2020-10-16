// server/roles.js
const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("Kasir")
 .addAny("transaction")
 
ac.grant("Manager")
 .addAny("transaction")
 .readAny("transaction")
 
ac.grant("Bos")
 .extend("Kasir")
 .extend("Manager")
 .updateAny("transaction")
 .deleteAny("transaction")
 
return ac;
});