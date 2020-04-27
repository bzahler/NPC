package com.npcapp2.npcapp2.services;

import java.util.List;

import com.npcapp2.npcapp2.entities.Npc;

public interface NpcService {
	List<Npc> getAll();
	Npc addOne(Npc npc);
	void deleteOne(String npcId);
	void updateOne(Npc npc);
}
