const fs = require("fs");

const rsaPemToJwk = require("rsa-pem-to-jwk");

const privateKey = fs.readFileSync("./certs/private.pem");
const jwk = rsaPemToJwk(privateKey, { use: "sig" }, "public");

// var fs = require("fs");
// var rsaPemToJwk = require("rsa-pem-to-jwk");

// var pem = fs.readFileSync("./certs/private.pem");

// var jwk = rsaPemToJwk(pem, { use: "sig" }, "public");

console.log(jwk);

// const privateKey = fs.readFileSync("./certs/public.pem");

// const certString = privateKey.toString("binary"); //Convert from buffer to string

// const cert = certString + "\n"; //Add a new line at the end of the file

// console.log(cert);

// const jwk = rsaPemToJwk(cert, { use: "sig" }, "public");

// console.log(jwk);

// var fs = require("fs");
// var pem2jwk = require("pem-jwk").pem2jwk;
// var jwk2pem = require("pem-jwk").jwk2pem;

// var str = fs.readFileSync("./certs/private.pem").toString();
// console.log(str);
// var jwk = pem2jwk(str);
// console.log(jwk);
// var pem = jwk2pem(jwk)
// assert.equal(pem, str)
