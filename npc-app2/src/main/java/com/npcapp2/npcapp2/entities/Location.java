package com.npcapp2.npcapp2.entities;

import java.util.Arrays;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Essentially anything that could be marked on a map. Could be a shop,
 *  town, dungeon, random wizard tower. Using the sublocation option 
 *  this could extend to be cities, countries, continents, etc. Having 
 *  a country and listing all of its sublocations, and their 
 *  sublocations, and their sublocations, might be a bit much for one 
 *  single object. May have to resort to attaching it to the subobjects 
 *  themselves but the goal is that characters and locations could be 
 *  interchangeable between campaigns, adventures, or settings without 
 *  having to be remade.
 */
@Document
public class Location {

	@Id
	private String locationId;
	private String name;
	private String summary;
	private String dmDesc;
	private String playerDesc;
	private String[] listNpc;
	private String[] listSubLocation;
	private String imgLink;
	
	public String getLocationId() {
		return locationId;
	}
	public void setLocationId(String locationId) {
		this.locationId = locationId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getDmDesc() {
		return dmDesc;
	}
	public void setDmDesc(String dmDesc) {
		this.dmDesc = dmDesc;
	}
	public String getPlayerDesc() {
		return playerDesc;
	}
	public void setPlayerDesc(String playerDesc) {
		this.playerDesc = playerDesc;
	}
	public String[] getListNpc() {
		return listNpc;
	}
	public void setListNpc(String[] listNpc) {
		this.listNpc = listNpc;
	}
	public String[] getListSubLocation() {
		return listSubLocation;
	}
	public void setListSubLocation(String[] listSubLocation) {
		this.listSubLocation = listSubLocation;
	}
	public String getImgLink() {
		return imgLink;
	}
	public void setImgLink(String imgLink) {
		this.imgLink = imgLink;
	}
	public Location(String locationId, String name, String summary, String dmDesc, String playerDesc, String[] listNpc,
			String[] listSubLocation, String imgLink) {
		super();
		this.locationId = locationId;
		this.name = name;
		this.summary = summary;
		this.dmDesc = dmDesc;
		this.playerDesc = playerDesc;
		this.listNpc = listNpc;
		this.listSubLocation = listSubLocation;
		this.imgLink = imgLink;
	}
	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Location [locationId=" + locationId + ", name=" + name + ", summary=" + summary + ", dmDesc=" + dmDesc
				+ ", playerDesc=" + playerDesc + ", listNpc=" + Arrays.toString(listNpc) + ", listSubLocation="
				+ Arrays.toString(listSubLocation) + ", imgLink=" + imgLink + "]";
	}
}
