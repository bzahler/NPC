package com.npcapp2.npcapp2.services;

import java.util.List;

import com.npcapp2.npcapp2.entities.Location;

public interface LocationService {
	List<Location> getAll();
	Location addOne(Location loc);
	void deleteOne(String locId);
	void updateOne(Location loc);
}
