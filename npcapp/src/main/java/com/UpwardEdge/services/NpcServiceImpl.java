package com.UpwardEdge.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.UpwardEdge.entities.Npc;
import com.UpwardEdge.repositories.NpcRepo;

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
}
