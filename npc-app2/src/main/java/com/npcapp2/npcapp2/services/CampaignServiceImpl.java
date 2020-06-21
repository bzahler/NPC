package com.npcapp2.npcapp2.services;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npcapp2.npcapp2.entities.Campaign;
import com.npcapp2.npcapp2.repositories.CampaignRepo;

@Service
public class CampaignServiceImpl implements CampaignService{

	@Autowired
	CampaignRepo campaignRepo;

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
		System.out.println("NpcService reached: deleteOne");
		ObjectId id = new ObjectId(campaignId);
		campaignRepo.deleteById(id);	
	}
}
