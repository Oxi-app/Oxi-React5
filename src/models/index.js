// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Points, Item, Fuel, Electricity, Transport, RawMaterials, Processes, Logistics, Basket, Materials } = initSchema(schema);

export {
  Points,
  Item,
  Fuel,
  Electricity,
  Transport,
  RawMaterials,
  Processes,
  Logistics,
  Basket,
  Materials
};