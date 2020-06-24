package com.npcapp2.npcapp2.services;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npcapp2.npcapp2.entities.Location;
import com.npcapp2.npcapp2.entities.LocationLists;
import com.npcapp2.npcapp2.repositories.LocationRepo;

@Service
public class LocationServiceImpl implements LocationService {

	@Autowired
	LocationRepo locRepo;
	
	@Autowired
	NpcService npcServ;

	@Override
	public List<Location> getAll() {
		System.out.println("LocationService reached: getAll");
		List<Location> ret = locRepo.findAll();
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

	// Look at notebook notes, you're not doing this correctly
	@Override
	public LocationLists getListsById(String locId) {
		System.out.println("LocationService reached: getById");
		ObjectId id = new ObjectId(locId);
		Optional<Location> findResult = locRepo.findById(id);

		if (findResult.isPresent()) {
			// get sublocations
			LocationLists locLists = new LocationLists();
			// the double .get() is a bit weird but I imagine the overhead is irrelevant
			locLists.setLocData(findResult.get());
			String[] stringSubLocs = findResult.get().getListSubLocation();

			// loop through listed sublocations
			for (int i = 0; i < stringSubLocs.length; i++) {
				// convert id to object id
				id = new ObjectId(stringSubLocs[i]);
				Optional<Location> temp = locRepo.findById(id);
				// have to deal with the new optional crap
				if (temp.isPresent()) {
					locLists.getSubLocations().add(temp.get());
				}
			}

			// get npcs
			locLists.setNpcList(npcServ.getLocationNpcs(findResult.get().getListNpc()));

			return locLists;
		} else {
			// should return some sort of error? Since this means the id on the front end didn't exist in the backend somehow
			return null;
		}
	}
}
