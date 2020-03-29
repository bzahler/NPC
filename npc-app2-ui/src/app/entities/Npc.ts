export class Npc {
    private NpcId: string;
    private name: string;
    private campaignId: number;
    private race: string;
    private country: string;
    private town: string;
    private physicalDesc: string;
    private voiceDesc: string;
    private personalityDesc: string;
    private organization: string;
    private comments: string;

	constructor($NpcId: string, $name: string, $campaignId: number, $race: string, $country: string, $town: string, $physicalDesc: string, $voiceDesc: string, $personalityDesc: string, $organization: string, $comments: string) {
		this.NpcId = $NpcId;
		this.name = $name;
		this.campaignId = $campaignId;
		this.race = $race;
		this.country = $country;
		this.town = $town;
		this.physicalDesc = $physicalDesc;
		this.voiceDesc = $voiceDesc;
		this.personalityDesc = $personalityDesc;
		this.organization = $organization;
		this.comments = $comments;
	}

    /**
     * Getter $NpcId
     * @return {string}
     */
	public get $NpcId(): string {
		return this.NpcId;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $campaignId
     * @return {number}
     */
	public get $campaignId(): number {
		return this.campaignId;
	}

    /**
     * Getter $race
     * @return {string}
     */
	public get $race(): string {
		return this.race;
	}

    /**
     * Getter $country
     * @return {string}
     */
	public get $country(): string {
		return this.country;
	}

    /**
     * Getter $town
     * @return {string}
     */
	public get $town(): string {
		return this.town;
	}

    /**
     * Getter $physicalDesc
     * @return {string}
     */
	public get $physicalDesc(): string {
		return this.physicalDesc;
	}

    /**
     * Getter $voiceDesc
     * @return {string}
     */
	public get $voiceDesc(): string {
		return this.voiceDesc;
	}

    /**
     * Getter $personalityDesc
     * @return {string}
     */
	public get $personalityDesc(): string {
		return this.personalityDesc;
	}

    /**
     * Getter $organization
     * @return {string}
     */
	public get $organization(): string {
		return this.organization;
	}

    /**
     * Getter $comments
     * @return {string}
     */
	public get $comments(): string {
		return this.comments;
	}

    /**
     * Setter $NpcId
     * @param {string} value
     */
	public set $NpcId(value: string) {
		this.NpcId = value;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $campaignId
     * @param {number} value
     */
	public set $campaignId(value: number) {
		this.campaignId = value;
	}

    /**
     * Setter $race
     * @param {string} value
     */
	public set $race(value: string) {
		this.race = value;
	}

    /**
     * Setter $country
     * @param {string} value
     */
	public set $country(value: string) {
		this.country = value;
	}

    /**
     * Setter $town
     * @param {string} value
     */
	public set $town(value: string) {
		this.town = value;
	}

    /**
     * Setter $physicalDesc
     * @param {string} value
     */
	public set $physicalDesc(value: string) {
		this.physicalDesc = value;
	}

    /**
     * Setter $voiceDesc
     * @param {string} value
     */
	public set $voiceDesc(value: string) {
		this.voiceDesc = value;
	}

    /**
     * Setter $personalityDesc
     * @param {string} value
     */
	public set $personalityDesc(value: string) {
		this.personalityDesc = value;
	}

    /**
     * Setter $organization
     * @param {string} value
     */
	public set $organization(value: string) {
		this.organization = value;
	}

    /**
     * Setter $comments
     * @param {string} value
     */
	public set $comments(value: string) {
		this.comments = value;
	}

}