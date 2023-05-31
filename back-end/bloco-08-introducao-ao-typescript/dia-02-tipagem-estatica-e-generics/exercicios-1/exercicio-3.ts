type Slices = 4 | 6 | 8;

export interface IPizza {
  flavor: string,
  slices: Slices,
};

export type TPizzaComum = {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni',
  slices: 4 | 6 | 8,
}

export type TPizzaVegetariana = {
  flavor: 'Marguerita' | 'Palmito' | 'Cogumelo',
  slices: 4 | 6 | 8,
}

export type TPizzaDoce = {
  flavor: 'Nutella' | 'Goiabada com queijo' | 'Marshmallow',
  slices: 4,
}