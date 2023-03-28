import  Mongodb from '../MongoClass.js'
import cartSchema from '../../DB/models/carts.js'

export default class MongoCarts extends Mongodb {
    constructor() {
        super("Carritos", cartSchema);
    }

}