const express = require('express');

const middleware = require('./middleware/index')
const authRouter = require('./routes/auth')
const parserRouter = require('./routes/parser')
const vacancyRouter = require('./routes/vacancy')
const basicRouter = require('./routes/basicRouts');
const profileRouter = require('./routes/profile')
const cvRouter = require('./routes/cv')

const app = express();
middleware(app);

app.use('/api/auth', authRouter)
app.use('/api/parser', parserRouter)
app.use('/api/vacancy', vacancyRouter)
app.use('/api/cv', cvRouter)
app.use('/', basicRouter);
app.use('/profile', profileRouter)


module.exports = app;
