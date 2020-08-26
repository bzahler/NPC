package com.npcapp2.npcapp2.services;

import java.util.List;

import com.npcapp2.npcapp2.entities.Campaign;
import com.npcapp2.npcapp2.entities.CampaignLists;

public interface CampaignService {
	List<Campaign> getAll();
	Campaign addOne(Campaign campaign);
	void deleteOne(String campaignId);
	void updateOne(Campaign campaign);
	CampaignLists getListsById(String campId);
}
