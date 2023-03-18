import Chance from "chance";

const chance = Chance();

export const fakeUserName = () => {
  return chance.name();
};

export const fakeUserAddress = () => {
  return chance.address();
};
