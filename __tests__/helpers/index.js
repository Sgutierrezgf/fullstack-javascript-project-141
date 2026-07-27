// @ts-check

import { URL } from 'url';
import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';

const getFixturePath = (filename) => path.join('..', '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(new URL(getFixturePath(filename), import.meta.url), 'utf-8').trim();
const getFixtureData = (filename) => JSON.parse(readFixture(filename));

export const getTestData = () => getFixtureData('testData.json');

export const prepareData = async (app) => {
  const { knex } = app.objection;
  await knex('users').insert(getFixtureData('users.json'));
};

export const getFakeStatus = () => ({
  name: faker.word.adjective() + faker.string.alphanumeric(5),
});

export const prepareStatusesData = async (app) => {
  const { knex } = app.objection;
  const statuses = Array(10).fill().map(getFakeStatus);
  await knex('statuses').insert(statuses);
};

export const signInApp = async (app) => {
  const responseSignIn = await app.inject({
    method: 'POST',
    url: '/session',
    payload: {
      data: getTestData().users.existing,
    },
  });
  const [sessionCookie] = responseSignIn.cookies;
  const { name, value } = sessionCookie;

  return { [name]: value };
};
