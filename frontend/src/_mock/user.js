import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `https://github.com/Abinas8055.png`,
  name: faker.name.fullName(),
  status: sample(['active', 'banned']),
  seen: sample(['online', 'offline']),
  phone: 'hiufghiuf',
  email: faker.internet.email(),
}));

export default users;
