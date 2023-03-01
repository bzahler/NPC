package com.npcapp2.npcapp2.entities;

import java.util.Arrays;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * A bookkeeping structure for the most part. Acts as a link between 
 * objects for easier display purposes as well as some notekeeping 
 * for DMs. May have to resort to attaching it to the subobjects 
 * themselves but the goal is that characters and locations could 
 * be interchangeable between campaigns, adventures, or settings 
 * without having to be remade.
 */
@Document
public class Campaign {

	@Id
	private String campaignId;
	private String name;
	private String startDate;
	private String setting;
	private String[] listPc;
	private String[] listNpc;
	private String[] listLocation;
	private String[] listQuest;
	private String[] sessionNotes;
	private String comments;
	private String imgLink;
	
	public String getCampaignId() {
		return campaignId;
	}
	public void setCampaignId(String campaignId) {
		this.campaignId = campaignId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getSetting() {
		return setting;
	}
	public void setSetting(String setting) {
		this.setting = setting;
	}
	public String[] getListPc() {
		return listPc;
	}
	public void setListPc(String[] listPc) {
		this.listPc = listPc;
	}
	public String[] getListNpc() {
		return listNpc;
	}
	public void setListNpc(String[] listNpc) {
		this.listNpc = listNpc;
	}
	public String[] getListLocation() {
		return listLocation;
	}
	public void setListLocation(String[] listLocation) {
		this.listLocation = listLocation;
	}
	public String[] getListQuest() {
		return listQuest;
	}
	public void setListQuest(String[] listQuest) {
		this.listQuest = listQuest;
	}
	public String[] getSessionNotes() {
		return sessionNotes;
	}
	public void setSessionNotes(String[] sessionNotes) {
		this.sessionNotes = sessionNotes;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public String getImgLink() {
		return imgLink;
	}
	public void setImgLink(String imgLink) {
		this.imgLink = imgLink;
	}
	
	public Campaign(String campaignId, String name, String startDate, String setting, String[] listPc, String[] listNpc,
			String[] listLocation, String[] listQuest, String[] sessionNotes, String comments, String imgLink) {
		super();
		this.campaignId = campaignId;
		this.name = name;
		this.startDate = startDate;
		this.setting = setting;
		this.listPc = listPc;
		this.listNpc = listNpc;
		this.listLocation = listLocation;
		this.listQuest = listQuest;
		this.sessionNotes = sessionNotes;
		this.comments = comments;
		this.imgLink = imgLink;
	}
	
	public Campaign() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "Campaign [campaignId=" + campaignId + ", name=" + name + ", startDate=" + startDate + ", setting="
				+ setting + ", listPc=" + Arrays.toString(listPc) + ", listNpc=" + Arrays.toString(listNpc)
				+ ", listLocation=" + Arrays.toString(listLocation) + ", listQuest=" + Arrays.toString(listQuest)
				+ ", sessionNotes=" + Arrays.toString(sessionNotes) + ", comments=" + comments + ", imgLink=" + imgLink
				+ "]";
	}

	
		
}
