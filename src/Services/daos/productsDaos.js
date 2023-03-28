import Mongodb from "../MongoClass.js";
import productSchema from '../../DB/models/products.js';

 class MongoProducts extends Mongodb {
    constructor() {
        super("productos", productSchema);
    }
}

export default MongoProducts