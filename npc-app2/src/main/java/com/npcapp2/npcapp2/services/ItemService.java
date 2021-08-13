package com.npcapp2.npcapp2.services;

import java.util.List;

import com.npcapp2.npcapp2.entities.Item;

public interface ItemService {
	List<Item> getAll();
	Item addOne(Item item);
	void deleteOne(String itemId);
	void updateOne(Item item);
}
