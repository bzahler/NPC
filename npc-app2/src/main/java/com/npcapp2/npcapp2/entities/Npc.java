package com.npcapp2.npcapp2.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Npc {

	@Id
	private String NpcId;

	private String name;
	private String campaign;
	private String race;
	private String occupation;
	private String country;
	private String town;
	private String physicalDesc;
	private String voiceDesc;
	private String personalityDesc;
	private String organization;
	private String comments;
	
	public Npc(String npcId, String name, String campaign, String race, String occupation, String country, String town,
			String physicalDesc, String voiceDesc, String personalityDesc, String organization, String comments) {
		super();
		NpcId = npcId;
		this.name = name;
		this.campaign = campaign;
		this.race = race;
		this.occupation = occupation;
		this.country = country;
		this.town = town;
		this.physicalDesc = physicalDesc;
		this.voiceDesc = voiceDesc;
		this.personalityDesc = personalityDesc;
		this.organization = organization;
		this.comments = comments;
	}
	public Npc() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getNpcId() {
		return NpcId;
	}
	public void setNpcId(String npcId) {
		NpcId = npcId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCampaign() {
		return campaign;
	}
	public void setCampaign(String campaign) {
		this.campaign = campaign;
	}
	public String getRace() {
		return race;
	}
	public void setRace(String race) {
		this.race = race;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getTown() {
		return town;
	}
	public void setTown(String town) {
		this.town = town;
	}
	public String getPhysicalDesc() {
		return physicalDesc;
	}
	public void setPhysicalDesc(String physicalDesc) {
		this.physicalDesc = physicalDesc;
	}
	public String getVoiceDesc() {
		return voiceDesc;
	}
	public void setVoiceDesc(String voiceDesc) {
		this.voiceDesc = voiceDesc;
	}
	public String getPersonalityDesc() {
		return personalityDesc;
	}
	public void setPersonalityDesc(String personalityDesc) {
		this.personalityDesc = personalityDesc;
	}
	public String getOrganization() {
		return organization;
	}
	public void setOrganization(String organization) {
		this.organization = organization;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((NpcId == null) ? 0 : NpcId.hashCode());
		result = prime * result + ((campaign == null) ? 0 : campaign.hashCode());
		result = prime * result + ((comments == null) ? 0 : comments.hashCode());
		result = prime * result + ((country == null) ? 0 : country.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((occupation == null) ? 0 : occupation.hashCode());
		result = prime * result + ((organization == null) ? 0 : organization.hashCode());
		result = prime * result + ((personalityDesc == null) ? 0 : personalityDesc.hashCode());
		result = prime * result + ((physicalDesc == null) ? 0 : physicalDesc.hashCode());
		result = prime * result + ((race == null) ? 0 : race.hashCode());
		result = prime * result + ((town == null) ? 0 : town.hashCode());
		result = prime * result + ((voiceDesc == null) ? 0 : voiceDesc.hashCode());
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
		Npc other = (Npc) obj;
		if (NpcId == null) {
			if (other.NpcId != null)
				return false;
		} else if (!NpcId.equals(other.NpcId))
			return false;
		if (campaign == null) {
			if (other.campaign != null)
				return false;
		} else if (!campaign.equals(other.campaign))
			return false;
		if (comments == null) {
			if (other.comments != null)
				return false;
		} else if (!comments.equals(other.comments))
			return false;
		if (country == null) {
			if (other.country != null)
				return false;
		} else if (!country.equals(other.country))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (occupation == null) {
			if (other.occupation != null)
				return false;
		} else if (!occupation.equals(other.occupation))
			return false;
		if (organization == null) {
			if (other.organization != null)
				return false;
		} else if (!organization.equals(other.organization))
			return false;
		if (personalityDesc == null) {
			if (other.personalityDesc != null)
				return false;
		} else if (!personalityDesc.equals(other.personalityDesc))
			return false;
		if (physicalDesc == null) {
			if (other.physicalDesc != null)
				return false;
		} else if (!physicalDesc.equals(other.physicalDesc))
			return false;
		if (race == null) {
			if (other.race != null)
				return false;
		} else if (!race.equals(other.race))
			return false;
		if (town == null) {
			if (other.town != null)
				return false;
		} else if (!town.equals(other.town))
			return false;
		if (voiceDesc == null) {
			if (other.voiceDesc != null)
				return false;
		} else if (!voiceDesc.equals(other.voiceDesc))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Npc [NpcId=" + NpcId + ", name=" + name + ", campaign=" + campaign + ", race=" + race + ", occupation="
				+ occupation + ", country=" + country + ", town=" + town + ", physicalDesc=" + physicalDesc
				+ ", voiceDesc=" + voiceDesc + ", personalityDesc=" + personalityDesc + ", organization=" + organization
				+ ", comments=" + comments + "]";
	}
}
