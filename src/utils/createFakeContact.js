import { faker } from '@faker-js/faker';

export const createFakeContact = () => ({
  id: faker.string.uuid(),
  aircraftType: faker.airline.aircraftType(),
  airplane: faker.airline.airplane(),
  airport: faker.airline.airport(),
  flightNumber: faker.airline.flightNumber(),
  seat: faker.airline.seat(),
});
// console.log(createFakeContact());
