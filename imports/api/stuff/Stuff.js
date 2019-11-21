import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Colleccion en mongo */
const Stuffs = new Mongo.Collection('Stuffs');

//const Pelicula = new Mongo.Collection('Peliculas');


/** Define a schema to specify the structure of each document in the collection. */
//const StuffSchema = new SimpleSchema({
//  name: String,
//  quantity: Number,
//  owner: String,
//  condition: {
//    type: String,
//    allowedValues: ['excellent', 'good', 'fair', 'poor'],
//    defaultValue: 'good',
//  },
//}, { tracker: Tracker });

const peliculaEsquema = new SimpleSchema({
 
  titulo: String,
  anoEstreno: Number,
  genero: String,
  duracion: Number,
  calificacion: Number,
  poster:String,
  actoresPrincipales:String,
  sinopsis: String,
  resena:String,
  director: String,
  owner: String,


  
  //name: String,
  //quantity: Number,
  //owner: String,
  //condition: {
   // type: String,
   // allowedValues: ['excellent', 'good', 'fair', 'poor'],
    //defaultValue: 'good',
  //},
}, { tracker: Tracker });




/** Attach this schema to the collection. */
Stuffs.attachSchema(peliculaEsquema);

/** Make the collection and schema available to other code. */
export { Stuffs, peliculaEsquema };
