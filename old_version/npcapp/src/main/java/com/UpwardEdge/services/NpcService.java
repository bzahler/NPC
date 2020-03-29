package com.UpwardEdge.services;

import java.util.List;

import com.UpwardEdge.entities.Npc;

public interface NpcService {
	List<Npc> getAll();

	void addOne(Npc npc);
}
