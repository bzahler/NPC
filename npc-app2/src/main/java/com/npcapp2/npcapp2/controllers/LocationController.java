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

import com.npcapp2.npcapp2.entities.Location;
import com.npcapp2.npcapp2.entities.LocationLists;
import com.npcapp2.npcapp2.services.LocationService;

@RestController
@RequestMapping("loc")
@CrossOrigin
public class LocationController {

	@Autowired
	LocationService locServ;

	@GetMapping
	public ResponseEntity<List<Location>> getAll() {
		System.out.println("LocationController reached. getAll()");
		return new ResponseEntity<>(locServ.getAll(), HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<Location> addOne(@RequestBody Location loc) {
		System.out.println("LocationController reached. addOne()");
		System.out.println(loc);
		return new ResponseEntity<>(locServ.addOne(loc), HttpStatus.OK);
	}

	@PostMapping("/update")
	public ResponseEntity<HttpStatus> updateOne(@RequestBody Location loc) {
		System.out.println("LocationController reached. updateOne()");
		System.out.println(loc);
		locServ.updateOne(loc);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PostMapping("/delete")
	public ResponseEntity<HttpStatus> deleteOne(@RequestBody String locId) {
		System.out.println("LocationController reached. deleteOne()");
		System.out.println(locId);
		locServ.deleteOne(locId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PostMapping("/getLists")
	public ResponseEntity<LocationLists> getListsById(@RequestBody String locId) {
		System.out.println("LocationController reached. getListsById()");
		System.out.println(locId);
		LocationLists check = locServ.getListsById(locId);
		if (check != null) {
			return new ResponseEntity<>(check, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		}

	}
}
