package com.npcapp2.npcapp2.services;

import java.util.List;

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
		System.out.println(ret);
		return ret;
	}

	@Override
	public void addOne(Npc npc) {
		npcRepo.save(npc);
	}
	

}
