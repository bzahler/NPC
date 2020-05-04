package com.npcapp2.npcapp2.entities;

import java.util.Arrays;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Any group of NPCs that is relevant. Guilds, cults, whatever.
 */
@Document
public class Organization {

	@Id
	private String orgId;
	private String name;
	private String[] listNpc;
	private String description;
	private String objectives;
	
	public Organization(String orgId, String name, String[] listNpc, String description, String objectives) {
		super();
		this.orgId = orgId;
		this.name = name;
		this.listNpc = listNpc;
		this.description = description;
		this.objectives = objectives;
	}

	public Organization() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getOrgId() {
		return orgId;
	}

	public void setOrgId(String orgId) {
		this.orgId = orgId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String[] getListNpc() {
		return listNpc;
	}

	public void setListNpc(String[] listNpc) {
		this.listNpc = listNpc;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getObjectives() {
		return objectives;
	}

	public void setObjectives(String objectives) {
		this.objectives = objectives;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + Arrays.hashCode(listNpc);
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((objectives == null) ? 0 : objectives.hashCode());
		result = prime * result + ((orgId == null) ? 0 : orgId.hashCode());
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
		Organization other = (Organization) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (!Arrays.equals(listNpc, other.listNpc))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (objectives == null) {
			if (other.objectives != null)
				return false;
		} else if (!objectives.equals(other.objectives))
			return false;
		if (orgId == null) {
			if (other.orgId != null)
				return false;
		} else if (!orgId.equals(other.orgId))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Organization [orgId=" + orgId + ", name=" + name + ", listNpc=" + Arrays.toString(listNpc)
				+ ", description=" + description + ", objectives=" + objectives + "]";
	}
}
