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

import com.npcapp2.npcapp2.entities.Organization;
import com.npcapp2.npcapp2.services.OrganizationService;

@RestController
@RequestMapping("org")
@CrossOrigin
public class OrganizationController {

	@Autowired
	OrganizationService orgServ;

	@GetMapping
	public ResponseEntity<List<Organization>> getAll() {
		System.out.println("OrganizationController reached. getAll()");
		return new ResponseEntity<>(orgServ.getAll(), HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<Organization> addOne(@RequestBody Organization org) {
		System.out.println("OrganizationController reached. addOne()");
		System.out.println(org);
		return new ResponseEntity<>(orgServ.addOne(org), HttpStatus.OK);
	}
	
	@PostMapping("/update")
	public ResponseEntity<HttpStatus> updateOne(@RequestBody Organization org) {
		System.out.println("OrganizationController reached. updateOne()");
		System.out.println(org);
		orgServ.updateOne(org);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/delete")
	public ResponseEntity<HttpStatus> deleteOne(@RequestBody String orgId) {
		System.out.println("OrganizationController reached. deleteOne()");
		System.out.println(orgId);
		orgServ.deleteOne(orgId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
