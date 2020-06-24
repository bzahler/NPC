package com.npcapp2.npcapp2.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
		System.out.println("NpcService reached: getAll");
		List<Npc> ret = npcRepo.findAll();
		return ret;
	}

	@Override
	public Npc addOne(Npc npc) {
		System.out.println("NpcService reached: addOne");
		return npcRepo.save(npc);
	}
	
	@Override
	public void updateOne(Npc npc) {
		System.out.println("NpcService reached: updateOne");
		npcRepo.save(npc);
	}

	@Override
	public void deleteOne(String npcId) {
		System.out.println("NpcService reached: deleteOne");
		ObjectId id = new ObjectId(npcId);
		npcRepo.deleteById(id);	
	}

	@Override
	public List<Npc> getLocationNpcs(String[] listNpc) {
		List<Npc> locationNpcs = new ArrayList<>();
		for (int i = 0; i < listNpc.length; i++) {
			ObjectId id = new ObjectId(listNpc[i]);
			Optional<Npc> temp = npcRepo.findById(id);
			if(temp.isPresent()) {
				locationNpcs.add(temp.get());
			}
		}
		return locationNpcs;
		
	}
}
