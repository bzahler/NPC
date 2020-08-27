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

import com.npcapp2.npcapp2.entities.PlayerCharacter;
import com.npcapp2.npcapp2.services.PlayerCharService;

@RestController
@RequestMapping("playerChar")
@CrossOrigin
public class PlayerCharController {

	@Autowired
	PlayerCharService pcServ;
	
	@GetMapping
	public ResponseEntity<List<PlayerCharacter>> getAll() {
		System.out.println("PcController reached. getAll()");
		return new ResponseEntity<>(pcServ.getAll(), HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<PlayerCharacter> addOne(@RequestBody PlayerCharacter pc) {
		System.out.println("PcController reached. addOne()");
		System.out.println(pc);
		return new ResponseEntity<>(pcServ.addOne(pc), HttpStatus.OK);
	}
	
	@PostMapping("/update")
	public ResponseEntity<HttpStatus> updateOne(@RequestBody PlayerCharacter pc) {
		System.out.println("PcController reached. updateOne()");
		System.out.println(pc);
		pcServ.updateOne(pc);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/delete")
	public ResponseEntity<HttpStatus> deleteOne(@RequestBody String pcId) {
		System.out.println("PcController reached. deleteOne()");
		System.out.println(pcId);
		pcServ.deleteOne(pcId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
