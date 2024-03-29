import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {  

  name:string;
  location: {
    lat:number;
    lng:number;
  };
  color:string = 'red';

  constructor () {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return `
          <div>
            <h2>User Name: ${this.name}</h2>            
            <p>Latitude: ${this.location.lat}</p>
            <p>Longitude: ${this.location.lng}</p>
          </div>
    `;
  }
}