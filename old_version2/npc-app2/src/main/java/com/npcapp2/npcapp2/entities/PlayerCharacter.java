package com.npcapp2.npcapp2.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * The player's character. Only needs to contain information that 
 * might be relevant to the DM. Specifics that change frequently 
 * like health, AC, or level might be too specific for this.
 *
 */
@Document
public class PlayerCharacter {

	@Id
	private String playerId;
	private String charName;
	private String playerName;
	private String charRace;
	private String charClass;
	private String phbBackground;
	private String physicalDesc;
	private String personalityDesc;
	private String charBackground;
	private String dmNotes;
	private String charLevel;
	private String charHealth;
	private String charArmorClass;
	private String imgLink;
	
	public String getPlayerId() {
		return playerId;
	}
	public void setPlayerId(String playerId) {
		this.playerId = playerId;
	}
	public String getCharName() {
		return charName;
	}
	public void setCharName(String charName) {
		this.charName = charName;
	}
	public String getPlayerName() {
		return playerName;
	}
	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}
	public String getCharRace() {
		return charRace;
	}
	public void setCharRace(String charRace) {
		this.charRace = charRace;
	}
	public String getCharClass() {
		return charClass;
	}
	public void setCharClass(String charClass) {
		this.charClass = charClass;
	}
	public String getPhbBackground() {
		return phbBackground;
	}
	public void setPhbBackground(String phbBackground) {
		this.phbBackground = phbBackground;
	}
	public String getPhysicalDesc() {
		return physicalDesc;
	}
	public void setPhysicalDesc(String physicalDesc) {
		this.physicalDesc = physicalDesc;
	}
	public String getPersonalityDesc() {
		return personalityDesc;
	}
	public void setPersonalityDesc(String personalityDesc) {
		this.personalityDesc = personalityDesc;
	}
	public String getCharBackground() {
		return charBackground;
	}
	public void setCharBackground(String charBackground) {
		this.charBackground = charBackground;
	}
	public String getDmNotes() {
		return dmNotes;
	}
	public void setDmNotes(String dmNotes) {
		this.dmNotes = dmNotes;
	}
	public String getCharLevel() {
		return charLevel;
	}
	public void setCharLevel(String charLevel) {
		this.charLevel = charLevel;
	}
	public String getCharHealth() {
		return charHealth;
	}
	public void setCharHealth(String charHealth) {
		this.charHealth = charHealth;
	}
	public String getCharArmorClass() {
		return charArmorClass;
	}
	public void setCharArmorClass(String charArmorClass) {
		this.charArmorClass = charArmorClass;
	}
	public String getImgLink() {
		return imgLink;
	}
	public void setImgLink(String imgLink) {
		this.imgLink = imgLink;
	}
	public PlayerCharacter() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PlayerCharacter(String playerId, String charName, String playerName, String charRace, String charClass,
			String phbBackground, String physicalDesc, String personalityDesc, String charBackground, String dmNotes,
			String charLevel, String charHealth, String charArmorClass, String imgLink) {
		super();
		this.playerId = playerId;
		this.charName = charName;
		this.playerName = playerName;
		this.charRace = charRace;
		this.charClass = charClass;
		this.phbBackground = phbBackground;
		this.physicalDesc = physicalDesc;
		this.personalityDesc = personalityDesc;
		this.charBackground = charBackground;
		this.dmNotes = dmNotes;
		this.charLevel = charLevel;
		this.charHealth = charHealth;
		this.charArmorClass = charArmorClass;
		this.imgLink = imgLink;
	}
	@Override
	public String toString() {
		return "PlayerCharacter [playerId=" + playerId + ", charName=" + charName + ", playerName=" + playerName
				+ ", charRace=" + charRace + ", charClass=" + charClass + ", phbBackground=" + phbBackground
				+ ", physicalDesc=" + physicalDesc + ", personalityDesc=" + personalityDesc + ", charBackground="
				+ charBackground + ", dmNotes=" + dmNotes + ", charLevel=" + charLevel + ", charHealth=" + charHealth
				+ ", charArmorClass=" + charArmorClass + ", imgLink=" + imgLink + "]";
	}
}
