package com.npcapp2.npcapp2.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.npcapp2.npcapp2.entities.Item;

@Repository
public interface ItemRepo extends MongoRepository<Item, ObjectId>{

}
