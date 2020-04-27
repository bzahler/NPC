package com.npcapp2.npcapp2.services;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npcapp2.npcapp2.entities.Npc;
import com.npcapp2.npcapp2.repositories.NpcRepo;

@Service
public class NpcServiceImpl implements NpcService {

	@Autowired
	NpcRepo npcRepo;

	@Override
	public List<Npc> getAll() {
		System.out.println("Service reached: getAll");
		List<Npc> ret = npcRepo.findAll();
		System.out.println(ret.get(0).getNpcId());
		return ret;
	}

	@Override
	public Npc addOne(Npc npc) {
		System.out.println("Service reached: addOne");
		return npcRepo.save(npc);
	}
	
	@Override
	public void updateOne(Npc npc) {
		System.out.println("Service reached: updateOne");
		npcRepo.save(npc);
	}

	@Override
	public void deleteOne(String npcId) {
		System.out.println("Service reached: deleteOne");
		ObjectId id = new ObjectId(npcId);
		npcRepo.deleteById(id);	
	}
}
