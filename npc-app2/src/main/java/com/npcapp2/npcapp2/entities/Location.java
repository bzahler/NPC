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
	// may need to be objectIds?
	private String[] listNpc;
	private String[] listSubLocation;
	
	public Location(String locationId, String name, String summary, String dmDesc, String playerDesc, String[] listNpc,
			String[] listSubLocation) {
		super();
		this.locationId = locationId;
		this.name = name;
		this.summary = summary;
		this.dmDesc = dmDesc;
		this.playerDesc = playerDesc;
		this.listNpc = listNpc;
		this.listSubLocation = listSubLocation;
	}
	public Location() {
		super();
		// TODO Auto-generated constructor stub
	}
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dmDesc == null) ? 0 : dmDesc.hashCode());
		result = prime * result + Arrays.hashCode(listNpc);
		result = prime * result + Arrays.hashCode(listSubLocation);
		result = prime * result + ((locationId == null) ? 0 : locationId.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((playerDesc == null) ? 0 : playerDesc.hashCode());
		result = prime * result + ((summary == null) ? 0 : summary.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Location other = (Location) obj;
		if (dmDesc == null) {
			if (other.dmDesc != null)
				return false;
		} else if (!dmDesc.equals(other.dmDesc))
			return false;
		if (!Arrays.equals(listNpc, other.listNpc))
			return false;
		if (!Arrays.equals(listSubLocation, other.listSubLocation))
			return false;
		if (locationId == null) {
			if (other.locationId != null)
				return false;
		} else if (!locationId.equals(other.locationId))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (playerDesc == null) {
			if (other.playerDesc != null)
				return false;
		} else if (!playerDesc.equals(other.playerDesc))
			return false;
		if (summary == null) {
			if (other.summary != null)
				return false;
		} else if (!summary.equals(other.summary))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Location [locationId=" + locationId + ", name=" + name + ", summary=" + summary + ", dmDesc=" + dmDesc
				+ ", playerDesc=" + playerDesc + ", listNpc=" + Arrays.toString(listNpc) + ", listSubLocation="
				+ Arrays.toString(listSubLocation) + "]";
	}
	
}
