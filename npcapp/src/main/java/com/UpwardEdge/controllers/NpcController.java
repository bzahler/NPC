package com.UpwardEdge.controllers;

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

import com.UpwardEdge.entities.Npc;
import com.UpwardEdge.services.NpcService;

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
	public ResponseEntity<HttpStatus> addOne(@RequestBody Npc npc) {
		System.out.println("NpcController reached. addOne()");
		npcServ.addOne(npc);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
