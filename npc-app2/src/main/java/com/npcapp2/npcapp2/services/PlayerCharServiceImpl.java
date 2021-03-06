package com.npcapp2.npcapp2.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npcapp2.npcapp2.entities.Location;
import com.npcapp2.npcapp2.entities.PlayerCharacter;
import com.npcapp2.npcapp2.repositories.PlayerCharRepo;

@Service
public class PlayerCharServiceImpl implements PlayerCharService {

		@Autowired
		PlayerCharRepo pcRepo;
		
		@Override
		public List<PlayerCharacter> getAll() {
			System.out.println("PlayerCharacterService reached: getAll");
			List<PlayerCharacter> ret = pcRepo.findAll();
			return ret;
		}

		@Override
		public PlayerCharacter addOne(PlayerCharacter pc) {
			System.out.println("PlayerCharacterService reached: addOne");
			return pcRepo.save(pc);
		}
		
		@Override
		public void updateOne(PlayerCharacter pc) {
			System.out.println("PlayerCharacterService reached: updateOne");
			pcRepo.save(pc);
		}

		@Override
		public void deleteOne(String pcId) {
			System.out.println("PlayerCharacterService reached: deleteOne");
			ObjectId id = new ObjectId(pcId);
			pcRepo.deleteById(id);	
		}
		
		@Override
		public List<PlayerCharacter> getPlayerCharList(String[] listPC) {
			List<PlayerCharacter> subPCs = new ArrayList<>();
			for (int i = 0; i < listPC.length; i++) {
				ObjectId id = new ObjectId(listPC[i]);
				Optional<PlayerCharacter> temp = pcRepo.findById(id);
				if(temp.isPresent()) {
					subPCs.add(temp.get());
				}
			}
			return subPCs;
		}
}
