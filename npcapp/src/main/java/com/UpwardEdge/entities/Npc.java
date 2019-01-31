package com.UpwardEdge.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="NPC")
public class Npc {

	@Id
	@Column(name="npc_id")
	@GeneratedValue(generator="npc_sequence", strategy=GenerationType.SEQUENCE)
	@SequenceGenerator(name="npc_sequence", sequenceName="npc_sequence", allocationSize=1)
	private int NpcId;
	
	private String name;
	private String campaign;
	private String race;
	private String occupation;
	private String country;
	private String town;
	@Column(name="physical_desc")
	private String physicalDesc;
	@Column(name="voice_desc")
	private String voiceDesc;
	@Column(name="personality_desc")
	private String personalityDesc;
	private String organization;
	private String comments;

	public Npc(int npcId, String name, String campaign, String race, String occupation, String country, String town,
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

	public int getNpcId() {
		return NpcId;
	}

	public void setNpcId(int npcId) {
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
	public String toString() {
		return "Npc [NpcId=" + NpcId + ", name=" + name + ", campaign=" + campaign + ", race=" + race + ", occupation="
				+ occupation + ", country=" + country + ", town=" + town + ", physicalDesc=" + physicalDesc
				+ ", voiceDesc=" + voiceDesc + ", personalityDesc=" + personalityDesc + ", organization=" + organization
				+ ", comments=" + comments + "]";
	}

	
}
