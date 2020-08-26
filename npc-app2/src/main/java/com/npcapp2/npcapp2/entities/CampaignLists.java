package com.npcapp2.npcapp2.entities;

import java.util.List;

/**
 * Object to allow returning the list of npcs and sublocations of an object
 * within one request.
 * 
 */
public class CampaignLists {

	private Campaign campaignData;
	private List<Npc> npcList;
	private List<Location> subLocations;
	
	public Campaign getCampaignData() {
		return campaignData;
	}
	public void setCampaignData(Campaign campaignData) {
		this.campaignData = campaignData;
	}
	public List<Npc> getNpcList() {
		return npcList;
	}
	public void setNpcList(List<Npc> npcList) {
		this.npcList = npcList;
	}
	public List<Location> getSubLocations() {
		return subLocations;
	}
	public void setSubLocations(List<Location> subLocations) {
		this.subLocations = subLocations;
	}
	
	public CampaignLists(Campaign campaignData, List<Npc> npcList, List<Location> subLocations) {
		super();
		this.campaignData = campaignData;
		this.npcList = npcList;
		this.subLocations = subLocations;
	}
	
	public CampaignLists() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "CampaignLists [campaignData=" + campaignData + ", npcList=" + npcList + ", subLocations=" + subLocations
				+ "]";
	}

}
