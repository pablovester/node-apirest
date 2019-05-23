const express = require('express');
const app = express();
const usersRoutes = require('../resources/users/routes')
const profilesRoutes = require('../resources/profiles/routes')
const models = require('../db/models')

app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/profiles', profilesRoutes)

app.get('/', (req, res) => {
   res.send('Node Academy API');
});


// PORT
const port = process.env.PORT || 3000;
models.sequelize.sync({
   force: false
}).then(() => {
   app.listen(port, () => console.log(`Listening on port ${port}...`));   
})
// `` se usa para template strings
