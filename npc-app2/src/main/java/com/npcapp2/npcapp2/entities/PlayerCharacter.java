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
	// private String charLevel;
	// private String charHealth;
	// private String charArmorClass;
	
	public PlayerCharacter(String playerId, String charName, String playerName, String charRace, String charClass,
			String phbBackground, String physicalDesc, String personalityDesc, String charBackground, String dmNotes) {
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
	}
	public PlayerCharacter() {
		super();
		// TODO Auto-generated constructor stub
	}
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((charBackground == null) ? 0 : charBackground.hashCode());
		result = prime * result + ((charClass == null) ? 0 : charClass.hashCode());
		result = prime * result + ((charName == null) ? 0 : charName.hashCode());
		result = prime * result + ((charRace == null) ? 0 : charRace.hashCode());
		result = prime * result + ((dmNotes == null) ? 0 : dmNotes.hashCode());
		result = prime * result + ((personalityDesc == null) ? 0 : personalityDesc.hashCode());
		result = prime * result + ((phbBackground == null) ? 0 : phbBackground.hashCode());
		result = prime * result + ((physicalDesc == null) ? 0 : physicalDesc.hashCode());
		result = prime * result + ((playerId == null) ? 0 : playerId.hashCode());
		result = prime * result + ((playerName == null) ? 0 : playerName.hashCode());
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
		PlayerCharacter other = (PlayerCharacter) obj;
		if (charBackground == null) {
			if (other.charBackground != null)
				return false;
		} else if (!charBackground.equals(other.charBackground))
			return false;
		if (charClass == null) {
			if (other.charClass != null)
				return false;
		} else if (!charClass.equals(other.charClass))
			return false;
		if (charName == null) {
			if (other.charName != null)
				return false;
		} else if (!charName.equals(other.charName))
			return false;
		if (charRace == null) {
			if (other.charRace != null)
				return false;
		} else if (!charRace.equals(other.charRace))
			return false;
		if (dmNotes == null) {
			if (other.dmNotes != null)
				return false;
		} else if (!dmNotes.equals(other.dmNotes))
			return false;
		if (personalityDesc == null) {
			if (other.personalityDesc != null)
				return false;
		} else if (!personalityDesc.equals(other.personalityDesc))
			return false;
		if (phbBackground == null) {
			if (other.phbBackground != null)
				return false;
		} else if (!phbBackground.equals(other.phbBackground))
			return false;
		if (physicalDesc == null) {
			if (other.physicalDesc != null)
				return false;
		} else if (!physicalDesc.equals(other.physicalDesc))
			return false;
		if (playerId == null) {
			if (other.playerId != null)
				return false;
		} else if (!playerId.equals(other.playerId))
			return false;
		if (playerName == null) {
			if (other.playerName != null)
				return false;
		} else if (!playerName.equals(other.playerName))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "PlayerCharacter [playerId=" + playerId + ", charName=" + charName + ", playerName=" + playerName
				+ ", charRace=" + charRace + ", charClass=" + charClass + ", phbBackground=" + phbBackground
				+ ", physicalDesc=" + physicalDesc + ", personalityDesc=" + personalityDesc + ", charBackground="
				+ charBackground + ", dmNotes=" + dmNotes + "]";
	}
	
}
