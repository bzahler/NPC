package com.npcapp2.npcapp2.services;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npcapp2.npcapp2.entities.Monster;
import com.npcapp2.npcapp2.repositories.MonsterRepo;

@Service
public class MonsterServiceImpl implements MonsterService{

	@Autowired
	MonsterRepo monRepo;
	
	@Override
	public List<Monster> getAll() {
		System.out.println("MonsterService reached: getAll");
		List<Monster> ret = monRepo.findAll();
		return ret;
	}

	@Override
	public Monster addOne(Monster m) {
		System.out.println("MonsterService reached: addOne");
		return monRepo.save(m);
	}

	@Override
	public Monster updateOne(Monster m) {
		System.out.println("MonsterService reached: updateOne");
		return monRepo.save(m);
	}

	@Override
	public void deleteOne(String monsterId) {
		System.out.println("MonsterService reached: deleteOne");
		ObjectId id = new ObjectId(monsterId);
		monRepo.deleteById(id);
	}
	
	@Override
	public List<Monster> addMultiple(List<Monster> monsters) {
		System.out.println("MonsterService reached: addMultiple");
		return monRepo.saveAll(monsters);
	}
}
