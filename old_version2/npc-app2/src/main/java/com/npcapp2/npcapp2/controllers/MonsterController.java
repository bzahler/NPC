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

import com.npcapp2.npcapp2.entities.Monster;
import com.npcapp2.npcapp2.services.MonsterService;

@RestController
@RequestMapping("monster")
@CrossOrigin
public class MonsterController {

	@Autowired
	MonsterService monServ;
	
	@GetMapping
	public ResponseEntity<List<Monster>> getAll() {
		System.out.println("MonsterController reached. getAll()");
		return new ResponseEntity<>(monServ.getAll(), HttpStatus.OK);
	}

	@PostMapping("/add")
	public ResponseEntity<Monster> addOne(@RequestBody Monster m) {
		System.out.println("MonsterController reached. addOne()");
		System.out.println(m);
		return new ResponseEntity<>(monServ.addOne(m), HttpStatus.OK);
	}

	@PostMapping("/addMultiple")
	public ResponseEntity<List<Monster>> addMultiple(@RequestBody List<Monster> monsters) {
		System.out.println("MonsterController reached. addMultiple()");
		System.out.println(monsters);
		return new ResponseEntity<>(monServ.addMultiple(monsters), HttpStatus.OK);
	}
	
	@PostMapping("/update")
	public ResponseEntity<Monster> updateOne(@RequestBody Monster m) {
		System.out.println("MonsterController reached. updateOne()");
		System.out.println(m);
		return new ResponseEntity<>(monServ.updateOne(m), HttpStatus.OK);
	}

	@PostMapping("/delete")
	public ResponseEntity<HttpStatus> deleteOne(@RequestBody String monsterId) {
		System.out.println("MonsterController reached. deleteOne()");
		System.out.println(monsterId);
		monServ.deleteOne(monsterId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
