package com.npcapp2.npcapp2.services;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npcapp2.npcapp2.entities.Location;
import com.npcapp2.npcapp2.repositories.LocationRepo;

@Service
public class LocationServiceImpl implements LocationService{

	@Autowired
	LocationRepo locRepo;
	
	@Override
	public List<Location> getAll() {
		System.out.println("LocationService reached: getAll");
		List<Location> ret = locRepo.findAll();
		System.out.println(ret.get(0).getLocationId());
		return ret;
	}

	@Override
	public Location addOne(Location loc) {
		System.out.println("LocationService reached: addOne");
		return locRepo.save(loc);
	}
	
	@Override
	public void updateOne(Location loc) {
		System.out.println("LocationService reached: updateOne");
		locRepo.save(loc);
	}

	@Override
	public void deleteOne(String locId) {
		System.out.println("LocationService reached: deleteOne");
		ObjectId id = new ObjectId(locId);
		locRepo.deleteById(id);	
	}
}
