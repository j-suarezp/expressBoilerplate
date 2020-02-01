import ColombiaWeatherService from '../../services/colombia_weather.service';
export class Controller {
  all(req, res) {
    ColombiaWeatherService
    .all()
    .then(r => {
      return res.json(r)
    });
  }
/*
  get(req, res) {
    ColombiaWeatherService
    .get()
    .then(r => res.json(r));
  }
*/
  create(req, res) {
    ColombiaWeatherService
      .create(req.body.year, req.body.weather)
      .then(r => res
        .status(201)
        .location(`/api/v1/examples/${r.id}`)
        .json(r))
  } 
}
export default new Controller();