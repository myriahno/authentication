const dotenv = require('dotenv')

dotenv.config({ path: '../../../.env' });

module.exports = {
  client_id: `${process.env.CLIENT_ID}`,
  resource_id: `${process.env.RESOURCE_ID}`,
  certPath: "./config/<selfSignedCertificate|certificateRequest>.pem",
  jti: "12345",
  privateKey: "./config/privateKey.key",
  audience: "https://idag2.jpmorganchase.com/adfs/oauth2/token",
  expiresIn: "8h",
  algorithm: "RS256",
  client_assertion_type: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
  grant_type: "client_credentials",
  ida_url: "https://idag2.jpmorganchase.com/adfs/oauth2/token",
  content_type: "application/x-www-form-urlencoded"
}