import examplesRouter from './api/controllers/examples/router'
import colombiaTempRouter from './api/controllers/colombia_weather/router'
export default function routes(app) {
  app.use('/api/v1/examples',examplesRouter);
  app.use('/api/v1/weathercol',colombiaTempRouter);
};