package com.npcapp2.npcapp2.services;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npcapp2.npcapp2.entities.Organization;
import com.npcapp2.npcapp2.repositories.OrganizationRepo;

@Service
public class OrganizationServiceImpl implements OrganizationService {

	@Autowired
	OrganizationRepo orgRepo;

	@Override
	public List<Organization> getAll() {
		System.out.println("OrganizationService reached: getAll");
		List<Organization> ret = orgRepo.findAll();
		System.out.println(ret.get(0).getOrgId());
		return ret;
	}

	@Override
	public Organization addOne(Organization org) {
		System.out.println("OrganizationService reached: addOne");
		return orgRepo.save(org);
	}
	
	@Override
	public void updateOne(Organization org) {
		System.out.println("OrganizationService reached: updateOne");
		orgRepo.save(org);
	}

	@Override
	public void deleteOne(String orgId) {
		System.out.println("OrganizationService reached: deleteOne");
		ObjectId id = new ObjectId(orgId);
		orgRepo.deleteById(id);	
	}
}
