package com.npcapp2.npcapp2.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Not a fleshed out idea yet. My thoughts were that this could 
 * serve as descriptions of adventures or parts of adventures 
 * that could then be reused across different campaigns. i.e. 
 * Gedron seeks to use magical artifact to achieve great power 
 * and 'must' be stopped. Durancar seeks to fight back the human 
 * empire and create a free land for various peoples.
 */
@Document
public class Quest {

	@Id
	private String questId;
	private String name;
	private String description;
	private String[] listNpc;
	private String entrySequence;
	private boolean isActive;
	private String[] progressNotes;
}
