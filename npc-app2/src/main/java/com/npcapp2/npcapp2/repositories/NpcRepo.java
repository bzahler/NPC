package com.npcapp2.npcapp2.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.npcapp2.npcapp2.entities.Npc;

@Repository
public interface NpcRepo extends MongoRepository<Npc, String>{

}
