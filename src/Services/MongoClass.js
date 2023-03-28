import "../DB/db.js"

import mongoose from "mongoose";

class Mongodb {
  constructor(collectionName, Schema) {
      this.collection = mongoose.model(collectionName , Schema)
  }

  async getAll() {
      try{
          const todo = await this.collection.find({})
          return todo
      }catch(err){
          throw new Error(err)
      }
  }

  async getById(id) {
      try{
          const byId = await this.collection.findById(id)
          return byId
      }catch(err){
          throw new Error(err)
      }
  }

  async create(product) {
      try{
          const NewProduct = await this.collection.create(product)
          return NewProduct
      }catch(err){
          throw new Error(err)
      }
  }

  async update(id, product) {
      try{
          const updateProduct = await this.collection.findByIdAndUpdate(id, product)
          return updateProduct
      }catch(err){
          throw new Error(err)
      }
  }

  async delete(id) {
      try{
          const deletedProduct = await this.collection.findByIdAndDelete(id)
          return deletedProduct
      }catch(err){
          throw new Error(err)
      }
  }
}

export default Mongodb;