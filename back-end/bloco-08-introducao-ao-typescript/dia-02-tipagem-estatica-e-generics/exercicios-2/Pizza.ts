type Slices = 4 | 6 | 8;

interface Pizza {
  flavour: string;
  slices: Slices;
};

const calabresa: Pizza = {
  flavour: 'calabresa',
  slices: 8,
}

const marguerita: Pizza = {
  flavour: 'marguerita',
  slices: 6,
}

const nutella: Pizza = {
  flavour: 'nutella',
  slices: 4,
}

type commonFlavours = 'calabresa' | 'frango' | 'pepperoni';
type vegetarianFlavours = 'marguerita' | 'palmito' | 'cogumelo';
type sweetFlavours = 'nutella' | 'goiabado com queijo' | 'marshmallow';

interface Common extends Pizza {
  flavour: commonFlavours,
}

interface Vegetarian extends Pizza {
  flavour: vegetarianFlavours,
  slices: 4 | 6 | 8,
}

interface Sweet extends Pizza {
  flavour: sweetFlavours,
  slices: 4,
}

const pizzaCalabresa: Common = {
  flavour: 'calabresa',
  slices: 4,
}

const pizzaFrango: Common = {
  flavour: 'frango',
  slices: 6,
}

const pizzaPepperoni: Common = {
  flavour: 'pepperoni',
  slices: 8,
}

const pizzaMarguerita: Vegetarian = {
  flavour: 'marguerita',
  slices: 4,
}

const pizzaPalmito: Vegetarian = {
  flavour: 'palmito',
  slices: 6,
}

const pizzaNutella: Sweet = {
  flavour: 'nutella',
  slices: 4,
}

