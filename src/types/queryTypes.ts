export type Rockets = {
  id: string;
  name: string;
  diameter: {
    meters: number;
  };
  height: {
    meters: number;
  };
  mass: {
    kg: number;
  };
};

export type Rocket = {
  rocket: {
    diameter: {
      meters: number;
    };
    country: string;
    company: string;
    boosters: number;
    id: string;
    name: string;
    type: string;
    wikipedia: string;
  };
};
