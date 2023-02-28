const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comments-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- Users SEEDED -----\n');
  
    await seedPosts();
    console.log('\n----- posts SEEDED -----\n');
  
    await seedComments();
    console.log('\n----- comments SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();
  