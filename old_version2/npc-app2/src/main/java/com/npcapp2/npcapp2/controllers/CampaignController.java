package com.npcapp2.npcapp2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npcapp2.npcapp2.entities.Campaign;
import com.npcapp2.npcapp2.entities.CampaignLists;
import com.npcapp2.npcapp2.services.CampaignService;

@RestController
@RequestMapping("campaign")
@CrossOrigin
public class CampaignController {

	@Autowired
	CampaignService campaignServ;

	@GetMapping
	public ResponseEntity<List<Campaign>> getAll() {
		System.out.println("CampaignController reached. getAll()");
		return new ResponseEntity<>(campaignServ.getAll(), HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<Campaign> addOne(@RequestBody Campaign campaign) {
		System.out.println("CampaignController reached. addOne()");
		System.out.println(campaign);
		return new ResponseEntity<>(campaignServ.addOne(campaign), HttpStatus.OK);
	}
	
	@PostMapping("/update")
	public ResponseEntity<HttpStatus> updateOne(@RequestBody Campaign campaign) {
		System.out.println("CampaignController reached. updateOne()");
		System.out.println(campaign);
		campaignServ.updateOne(campaign);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/delete")
	public ResponseEntity<HttpStatus> deleteOne(@RequestBody String campaignId) {
		System.out.println("CampaignController reached. deleteOne()");
		System.out.println(campaignId);
		campaignServ.deleteOne(campaignId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/getLists")
	public ResponseEntity<CampaignLists> getListsById(@RequestBody String campaignId) {
		System.out.println("LocationController reached. getListsById()");
		System.out.println(campaignId);
		CampaignLists check = campaignServ.getListsById(campaignId);
		if (check != null) {
			return new ResponseEntity<>(check, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}
	}
}
