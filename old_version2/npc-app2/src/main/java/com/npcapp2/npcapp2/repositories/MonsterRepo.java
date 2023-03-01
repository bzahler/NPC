package com.npcapp2.npcapp2.repositories;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.npcapp2.npcapp2.entities.Monster;

@Repository
public interface MonsterRepo extends MongoRepository<Monster, ObjectId> {

}
