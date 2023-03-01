package com.npcapp2.npcapp2.entities;

import java.util.List;

/**
 * Object to allow returning the list of npcs and sublocations of an object
 * within one request.
 * 
 */
public class LocationLists {

	private Location locData;
	private List<Npc> npcList;
	private List<Location> subLocations;
	
	public Location getLocData() {
		return locData;
	}
	public void setLocData(Location locData) {
		this.locData = locData;
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
	public LocationLists(Location locData, List<Npc> npcList, List<Location> subLocations) {
		super();
		this.locData = locData;
		this.npcList = npcList;
		this.subLocations = subLocations;
	}
	public LocationLists() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "LocationLists [locData=" + locData + ", npcList=" + npcList + ", subLocations=" + subLocations + "]";
	}

}
