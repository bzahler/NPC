package com.npcapp2.npcapp2.services;

import java.util.List;

import com.npcapp2.npcapp2.entities.Monster;

public interface MonsterService {
	List<Monster> getAll();
	Monster addOne(Monster m);
	void deleteOne(String monsterId);
	Monster updateOne(Monster m);
	List<Monster> addMultiple(List<Monster> monsters);
}
