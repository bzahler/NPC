package com.npcapp2.npcapp2.services;

import java.util.List;

import com.npcapp2.npcapp2.entities.Organization;

public interface OrganizationService {
	List<Organization> getAll();
	Organization addOne(Organization org);
	void deleteOne(String orgId);
	void updateOne(Organization org);
}
