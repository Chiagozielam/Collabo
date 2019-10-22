module.exports = {
    development: {
      url: 'postgres://postgres:danieldon16475@127.0.0.1:5432/codegig',
      dialect: 'postgres',
    },
    test: {
      url: 'postgres://eurlpdllpwuolh:aee514199e95beafc79141782cb061a953e3fa4bbdbf61d929829a521761a634@ec2-174-129-227-51.compute-1.amazonaws.com:5432/de97sm236r3k43',
      dialect: 'postgres',
    },
    production: {
      url: 'postgres://eurlpdllpwuolh:aee514199e95beafc79141782cb061a953e3fa4bbdbf61d929829a521761a634@ec2-174-129-227-51.compute-1.amazonaws.com:5432/de97sm236r3k43',
      dialect: 'postgres',
    },
  };