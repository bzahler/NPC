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

import com.npcapp2.npcapp2.entities.Item;
import com.npcapp2.npcapp2.services.ItemService;

@RestController
@RequestMapping("item")
@CrossOrigin
public class ItemController {
	
	@Autowired
	ItemService itemServ;
	
	@GetMapping
	public ResponseEntity<List<Item>> getAll() {
		System.out.println("ItemController reached. getAll()");
		return new ResponseEntity<>(itemServ.getAll(), HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Item> addOne(@RequestBody Item item) {
		System.out.println("ItemController reached. addOne()");
		System.out.println(item);
		return new ResponseEntity<>(itemServ.addOne(item), HttpStatus.OK);
	}
	
	@PostMapping("/update")
	public ResponseEntity<HttpStatus> updateOne(@RequestBody Item item) {
		System.out.println("ItemController reached. updateOne()");
		System.out.println(item);
		itemServ.updateOne(item);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/delete")
	public ResponseEntity<HttpStatus> deleteOne(@RequestBody String itemId) {
		System.out.println("ItemController reached. deleteOne()");
		System.out.println(itemId);
		itemServ.deleteOne(itemId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
