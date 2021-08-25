package com.npcapp2.npcapp2.services;

import java.util.List;

import com.npcapp2.npcapp2.entities.Location;
import com.npcapp2.npcapp2.entities.LocationLists;

public interface LocationService {
	List<Location> getAll();
	Location addOne(Location loc);
	void deleteOne(String locId);
	void updateOne(Location loc);
	LocationLists getListsById(String locId);
	List<Location> getSubLocList(String[] listSubLoc);
	List<Location> addMultiple(List<Location> locs);
}
