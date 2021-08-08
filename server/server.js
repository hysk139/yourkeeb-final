const express = require ('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const app = express()
const helmet = require('helmet')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())

const keyboardRoute = require('./services/api/routes/keyboardRoutes');
const brandRoute = require('./services/api/routes/brandRoutes');
const layoutRoute = require('./services/api/routes/layoutRoutes');
const editRoute = require('./services/api/routes/editRoutes');
const switchRoute = require('./services/api/routes/switchRoutes');
app.use(helmet());
app.use(logger('dev'));
app.use('/api/products/keyboard', keyboardRoute);
app.use('/api/products/switch', switchRoute);
app.use('/api/brand', brandRoute);
app.use('/api/layout', layoutRoute);
app.use('/api/edit', editRoute);
// app.use('/api/dessert', dessertRoute);
// app.use('/api/maincourse', maincourseRoute);
// app.use('/api/admin', adminRoute);
// app.use('/api/search', searchDishRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening at port ${process.env.PORT}`)
})