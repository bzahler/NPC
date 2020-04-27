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

import com.npcapp2.npcapp2.entities.Npc;
import com.npcapp2.npcapp2.services.NpcService;

@RestController
@RequestMapping("npc")
@CrossOrigin
public class NpcController {

	@Autowired
	NpcService npcServ;

	@GetMapping
	public ResponseEntity<List<Npc>> getAll() {
		System.out.println("NpcController reached. getAll()");
		return new ResponseEntity<>(npcServ.getAll(), HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<Npc> addOne(@RequestBody Npc npc) {
		System.out.println("NpcController reached. addOne()");
		System.out.println(npc);
		return new ResponseEntity<>(npcServ.addOne(npc), HttpStatus.OK);
	}
	
	@PostMapping("/update")
	public ResponseEntity<HttpStatus> updateOne(@RequestBody Npc npc) {
		System.out.println("NpcController reached. updateOne()");
		System.out.println(npc);
		npcServ.updateOne(npc);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/delete")
	public ResponseEntity<HttpStatus> deleteOne(@RequestBody String npcId) {
		System.out.println("NpcController reached. deleteOne()");
		System.out.println(npcId);
		npcServ.deleteOne(npcId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
