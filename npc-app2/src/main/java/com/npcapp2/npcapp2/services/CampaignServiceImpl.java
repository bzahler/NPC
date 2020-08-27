package com.npcapp2.npcapp2.services;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npcapp2.npcapp2.entities.Campaign;
import com.npcapp2.npcapp2.entities.CampaignLists;
import com.npcapp2.npcapp2.repositories.CampaignRepo;

@Service
public class CampaignServiceImpl implements CampaignService{

	@Autowired
	CampaignRepo campaignRepo;
	@Autowired
	NpcService npcServ;
	@Autowired
	LocationService locServ;
	@Autowired
	PlayerCharService pcServ;

	@Override
	public List<Campaign> getAll() {
		System.out.println("CampaignService reached: getAll");
		List<Campaign> ret = campaignRepo.findAll();
		return ret;
	}

	@Override
	public Campaign addOne(Campaign campaign) {
		System.out.println("CampaignService reached: addOne");
		return campaignRepo.save(campaign);
	}
	
	@Override
	public void updateOne(Campaign campaign) {
		System.out.println("CampaignService reached: updateOne");
		campaignRepo.save(campaign);
	}

	@Override
	public void deleteOne(String campaignId) {
		System.out.println("CampaignService reached: deleteOne");
		ObjectId id = new ObjectId(campaignId);
		campaignRepo.deleteById(id);	
	}
	
	@Override
	public CampaignLists getListsById(String campId) {
		System.out.println("CampaignService reached: getListsById");
		System.out.println(campId);
		ObjectId id = new ObjectId(campId);
		Optional<Campaign> findResult = campaignRepo.findById(id);
		
		if (findResult.isPresent()) {
			CampaignLists campLists = new CampaignLists();
			campLists.setCampaignData(findResult.get());
			
			// get sublocations from locationService
			campLists.setSubLocations(locServ.getSubLocList(findResult.get().getListLocation()));
			
			// get npcs from npcService
			campLists.setNpcList(npcServ.getNpcList(findResult.get().getListNpc()));
			
			// get PCs from pcService
			campLists.setPcList(pcServ.getPlayerCharList(findResult.get().getListPc()));
			
			return campLists;
		} else {
			// should return some sort of error? Since this means the id on the front end didn't exist in the backend somehow
			return null;
		}
	}
}
