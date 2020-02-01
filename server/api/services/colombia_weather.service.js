import l from '../../common/logger';
import { rejects } from 'assert';

let id = 0;
const colombiaWeather = [];
const dataUrl = 'http://climatedataapi.worldbank.org/climateweb/rest/v1/country/cru/tas/year/COL.json';

export class ColombiaWeatherService {

  all() {
    return this.initData();
  }

  create(year, weather) {
    this.initData();

    const instance = {
      year,
      weather,
      id: id++
    };
    
    colombiaWeather.push(instance);
    l.info(instance, `${this.constructor.name}.create(${year})`);
    
    return Promise.resolve(instance);
  }

  initData() {
    return new Promise((resolve, reject) => {
      if(colombiaWeather.length == 0)
      {
          let request = require('request');
          request(dataUrl, (error, response, body) => {
              l.info('Requesting data from the World Bank [' + dataUrl + ']\nSTATUS: ' + response.statusCode);
              let jsonData = JSON.parse(body);
              l.info('TOTAL ENTRIES: ' + jsonData.length);
              jsonData.map(item => {
                  item.id = id++;
                  colombiaWeather.push(item);
              });
              l.info(`${this.constructor.name}.all()`);
              resolve(colombiaWeather);
          });
      }
      else {
        l.info(`${this.constructor.name}.all()`);
        resolve(colombiaWeather);
      }
    });
      
  }
}

export default new ColombiaWeatherService();