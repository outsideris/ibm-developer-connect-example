const server = require('../server');

const ds = server.dataSources.pg;
const lbTables = ['Post', 'Comment'];

ds.automigrate(lbTables, (er) => {
  if (er) throw er;
  console.log(`Loopback tables [${lbTables}]` + 
              ` created in ${ds.adapter.name}`);
});
