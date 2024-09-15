const config = {
  auth: {
    clientId:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' ,
    clientSecret:'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    authority: `https://connectionet.b2clogin.com/connectionet.onmicrosoft.com/B2C_1_siso`,
    redirectUri: 'http://localhost:5000/api/auth/callback', 
  },
};

module.exports = config;
