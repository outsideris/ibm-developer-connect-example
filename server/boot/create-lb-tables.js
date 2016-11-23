const server = require('../server');

const ds = server.dataSources.pg;
const lbTables = ['Post'];

ds.automigrate(lbTables, (er) => {
  if (er) throw er;
  console.log(`Loopback tables [${lbTables}]` + 
              ` created in ${ds.adapter.name}`);
});
