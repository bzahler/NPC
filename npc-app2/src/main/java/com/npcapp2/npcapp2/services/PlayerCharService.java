package com.npcapp2.npcapp2.services;

import java.util.List;

import com.npcapp2.npcapp2.entities.PlayerCharacter;

public interface PlayerCharService {
	List<PlayerCharacter> getAll();
	PlayerCharacter addOne(PlayerCharacter pc);
	void deleteOne(String pcId);
	void updateOne(PlayerCharacter pc);
}
