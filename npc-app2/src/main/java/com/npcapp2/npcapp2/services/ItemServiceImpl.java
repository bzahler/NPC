package com.npcapp2.npcapp2.services;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npcapp2.npcapp2.entities.Item;
import com.npcapp2.npcapp2.repositories.ItemRepo;

@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	ItemRepo itemRepo;

	@Override
	public List<Item> getAll() {
		System.out.println("ItemService reached: getAll");
		List<Item> ret = itemRepo.findAll();
		System.out.println(ret);
		return ret;
	}

	@Override
	public Item addOne(Item item) {
		System.out.println("ItemService reached: addOne");
		return itemRepo.save(item);
	}

	@Override
	public void deleteOne(String itemId) {
		System.out.println("ItemService reached: deleteOne");
		ObjectId id = new ObjectId(itemId);
		itemRepo.deleteById(id);
		
	}

	@Override
	public void updateOne(Item item) {
		System.out.println("ItemService reached: updateOne");
		itemRepo.save(item);
		
	}

}
