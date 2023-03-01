package com.npcapp2.npcapp2.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Monster {

	@Id
	private String monsterId;
	private String name;
	private String monsterType;
	private String monsterSubType;
	private String alignment;
	private int armorClass;
	private String armorType;
	private int hitPoints;
	private int speed;
	private int strScore;
	private int strMod;
	private int dexScore;
	private int dexMod;
	private int conScore;
	private int conMod;
	private int intScore;
	private int intMod;
	private int wisScore;
	private int wisMod;
	private int chaScore;
	private int chaMod;
	private List<String> skills;
	private List<String> senses;
	private List<String> languages;
	private int challengeRating;
	private int experience;
	private List<String> traits;
	private List<String> actions;
	private String lore;
	private String searchTags;
	
	public String getMonsterId() {
		return monsterId;
	}
	public void setMonsterId(String monsterId) {
		this.monsterId = monsterId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMonsterType() {
		return monsterType;
	}
	public void setMonsterType(String monsterType) {
		this.monsterType = monsterType;
	}
	public String getMonsterSubType() {
		return monsterSubType;
	}
	public void setMonsterSubType(String monsterSubType) {
		this.monsterSubType = monsterSubType;
	}
	public String getAlignment() {
		return alignment;
	}
	public void setAlignment(String alignment) {
		this.alignment = alignment;
	}
	public int getArmorClass() {
		return armorClass;
	}
	public void setArmorClass(int armorClass) {
		this.armorClass = armorClass;
	}
	public String getArmorType() {
		return armorType;
	}
	public void setArmorType(String armorType) {
		this.armorType = armorType;
	}
	public int getHitPoints() {
		return hitPoints;
	}
	public void setHitPoints(int hitPoints) {
		this.hitPoints = hitPoints;
	}
	public int getSpeed() {
		return speed;
	}
	public void setSpeed(int speed) {
		this.speed = speed;
	}
	public int getStrScore() {
		return strScore;
	}
	public void setStrScore(int strScore) {
		this.strScore = strScore;
	}
	public int getStrMod() {
		return strMod;
	}
	public void setStrMod(int strMod) {
		this.strMod = strMod;
	}
	public int getDexScore() {
		return dexScore;
	}
	public void setDexScore(int dexScore) {
		this.dexScore = dexScore;
	}
	public int getDexMod() {
		return dexMod;
	}
	public void setDexMod(int dexMod) {
		this.dexMod = dexMod;
	}
	public int getConScore() {
		return conScore;
	}
	public void setConScore(int conScore) {
		this.conScore = conScore;
	}
	public int getConMod() {
		return conMod;
	}
	public void setConMod(int conMod) {
		this.conMod = conMod;
	}
	public int getIntScore() {
		return intScore;
	}
	public void setIntScore(int intScore) {
		this.intScore = intScore;
	}
	public int getIntMod() {
		return intMod;
	}
	public void setIntMod(int intMod) {
		this.intMod = intMod;
	}
	public int getWisScore() {
		return wisScore;
	}
	public void setWisScore(int wisScore) {
		this.wisScore = wisScore;
	}
	public int getWisMod() {
		return wisMod;
	}
	public void setWisMod(int wisMod) {
		this.wisMod = wisMod;
	}
	public int getChaScore() {
		return chaScore;
	}
	public void setChaScore(int chaScore) {
		this.chaScore = chaScore;
	}
	public int getChaMod() {
		return chaMod;
	}
	public void setChaMod(int chaMod) {
		this.chaMod = chaMod;
	}
	public List<String> getSkills() {
		return skills;
	}
	public void setSkills(List<String> skills) {
		this.skills = skills;
	}
	public List<String> getSenses() {
		return senses;
	}
	public void setSenses(List<String> senses) {
		this.senses = senses;
	}
	public List<String> getLanguages() {
		return languages;
	}
	public void setLanguages(List<String> languages) {
		this.languages = languages;
	}
	public int getChallengeRating() {
		return challengeRating;
	}
	public void setChallengeRating(int challengeRating) {
		this.challengeRating = challengeRating;
	}
	public int getExperience() {
		return experience;
	}
	public void setExperience(int experience) {
		this.experience = experience;
	}
	public List<String> getTraits() {
		return traits;
	}
	public void setTraits(List<String> traits) {
		this.traits = traits;
	}
	public List<String> getActions() {
		return actions;
	}
	public void setActions(List<String> actions) {
		this.actions = actions;
	}
	public String getLore() {
		return lore;
	}
	public void setLore(String lore) {
		this.lore = lore;
	}
	public String getSearchTags() {
		return searchTags;
	}
	public void setSearchTags(String searchTags) {
		this.searchTags = searchTags;
	}
	
	public Monster(String monsterId, String name, String monsterType, String monsterSubType, String alignment,
			int armorClass, String armorType, int hitPoints, int speed, int strScore, int strMod, int dexScore,
			int dexMod, int conScore, int conMod, int intScore, int intMod, int wisScore, int wisMod, int chaScore,
			int chaMod, List<String> skills, List<String> senses, List<String> languages, int challengeRating,
			int experience, List<String> traits, List<String> actions, String lore, String searchTags) {
		super();
		this.monsterId = monsterId;
		this.name = name;
		this.monsterType = monsterType;
		this.monsterSubType = monsterSubType;
		this.alignment = alignment;
		this.armorClass = armorClass;
		this.armorType = armorType;
		this.hitPoints = hitPoints;
		this.speed = speed;
		this.strScore = strScore;
		this.strMod = strMod;
		this.dexScore = dexScore;
		this.dexMod = dexMod;
		this.conScore = conScore;
		this.conMod = conMod;
		this.intScore = intScore;
		this.intMod = intMod;
		this.wisScore = wisScore;
		this.wisMod = wisMod;
		this.chaScore = chaScore;
		this.chaMod = chaMod;
		this.skills = skills;
		this.senses = senses;
		this.languages = languages;
		this.challengeRating = challengeRating;
		this.experience = experience;
		this.traits = traits;
		this.actions = actions;
		this.lore = lore;
		this.searchTags = searchTags;
	}
	
	public Monster() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public String toString() {
		return "Monster [monsterId=" + monsterId + ", name=" + name + ", monsterType=" + monsterType
				+ ", monsterSubType=" + monsterSubType + ", alignment=" + alignment + ", armorClass=" + armorClass
				+ ", armorType=" + armorType + ", hitPoints=" + hitPoints + ", speed=" + speed + ", strScore="
				+ strScore + ", strMod=" + strMod + ", dexScore=" + dexScore + ", dexMod=" + dexMod + ", conScore="
				+ conScore + ", conMod=" + conMod + ", intScore=" + intScore + ", intMod=" + intMod + ", wisScore="
				+ wisScore + ", wisMod=" + wisMod + ", chaScore=" + chaScore + ", chaMod=" + chaMod + ", skills="
				+ skills + ", senses=" + senses + ", languages=" + languages + ", challengeRating=" + challengeRating
				+ ", experience=" + experience + ", traits=" + traits + ", actions=" + actions + ", lore=" + lore
				+ ", searchTags=" + searchTags + "]";
	}
}
