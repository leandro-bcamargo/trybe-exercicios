type Slices = 4 | 6 | 8;
interface Pizza {
    flavour: string;
    slices: Slices;
}
declare const calabresa: Pizza;
declare const marguerita: Pizza;
declare const nutella: Pizza;
type commonFlavours = 'calabresa' | 'frango' | 'pepperoni';
type vegetarianFlavours = 'marguerita' | 'palmito' | 'cogumelo';
type sweetFlavours = 'nutella' | 'goiabado com queijo' | 'marshmallow';
interface Common extends Pizza {
    flavour: commonFlavours;
}
interface Vegetarian extends Pizza {
    flavour: vegetarianFlavours;
    slices: 4 | 6 | 8;
}
interface Sweet extends Pizza {
    flavour: sweetFlavours;
    slices: 4;
}
