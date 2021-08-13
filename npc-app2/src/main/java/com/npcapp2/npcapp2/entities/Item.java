package com.npcapp2.npcapp2.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Item {
	
	@Id
	private String itemId;
	private String name;
	private String type;
	private String attunement;
	private String summary;
	private String description;
	private String notes;
	private String tags;
	private String img;
	
	public String getItemId() {
		return itemId;
	}
	public void setItemId(String itemId) {
		this.itemId = itemId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getAttunement() {
		return attunement;
	}
	public void setAttunement(String attunement) {
		this.attunement = attunement;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public Item(String itemId, String name, String type, String attunement, String summary, String description,
			String notes, String tags, String img) {
		super();
		this.itemId = itemId;
		this.name = name;
		this.type = type;
		this.attunement = attunement;
		this.summary = summary;
		this.description = description;
		this.notes = notes;
		this.tags = tags;
		this.img = img;
	}
	public Item() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Item [itemId=" + itemId + ", name=" + name + ", type=" + type + ", attunement=" + attunement
				+ ", summary=" + summary + ", description=" + description + ", notes=" + notes + ", tags=" + tags
				+ ", img=" + img + "]";
	}
}
