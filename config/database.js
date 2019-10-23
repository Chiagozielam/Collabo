 const Sequelize = require('sequelize');

 let localDb = new Sequelize('codegig', 'postgres', 'danieldon16475', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});



let remoteDb = new Sequelize('de97sm236r3k43', 'eurlpdllpwuolh', 'aee514199e95beafc79141782cb061a953e3fa4bbdbf61d929829a521761a634', {
  host: 'ec2-174-129-227-51.compute-1.amazonaws.com',
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});


// module.exports = process.env === 'production' ? remoteDb : localDb;
module.exports = remoteDb;
 
