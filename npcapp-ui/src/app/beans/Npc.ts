export class Npc {
    private id: number;
    private name: string;
    private campaign: string;
    private race: string;
    private occupation: string;
    private country: string;
    private town: string;
    private physicalDesc: string;
    private voiceDesc: string;
    private personalityDesc: string;
    private organization: string;
    private comments: string;

    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Getter $campaign
     * @return {string}
     */
	public get $campaign(): string {
		return this.campaign;
	}

    /**
     * Setter $campaign
     * @param {string} value
     */
	public set $campaign(value: string) {
		this.campaign = value;
	}

    /**
     * Getter $race
     * @return {string}
     */
	public get $race(): string {
		return this.race;
	}

    /**
     * Setter $race
     * @param {string} value
     */
	public set $race(value: string) {
		this.race = value;
	}

    /**
     * Getter $occupation
     * @return {string}
     */
	public get $occupation(): string {
		return this.occupation;
	}

    /**
     * Setter $occupation
     * @param {string} value
     */
	public set $occupation(value: string) {
		this.occupation = value;
	}

    /**
     * Getter $country
     * @return {string}
     */
	public get $country(): string {
		return this.country;
	}

    /**
     * Setter $country
     * @param {string} value
     */
	public set $country(value: string) {
		this.country = value;
	}

    /**
     * Getter $town
     * @return {string}
     */
	public get $town(): string {
		return this.town;
	}

    /**
     * Setter $town
     * @param {string} value
     */
	public set $town(value: string) {
		this.town = value;
	}

    /**
     * Getter $physicalDesc
     * @return {string}
     */
	public get $physicalDesc(): string {
		return this.physicalDesc;
	}

    /**
     * Setter $physicalDesc
     * @param {string} value
     */
	public set $physicalDesc(value: string) {
		this.physicalDesc = value;
	}

    /**
     * Getter $voiceDesc
     * @return {string}
     */
	public get $voiceDesc(): string {
		return this.voiceDesc;
	}

    /**
     * Setter $voiceDesc
     * @param {string} value
     */
	public set $voiceDesc(value: string) {
		this.voiceDesc = value;
	}

    /**
     * Getter $personalityDesc
     * @return {string}
     */
	public get $personalityDesc(): string {
		return this.personalityDesc;
	}

    /**
     * Setter $personalityDesc
     * @param {string} value
     */
	public set $personalityDesc(value: string) {
		this.personalityDesc = value;
	}

    /**
     * Getter $organization
     * @return {string}
     */
	public get $organization(): string {
		return this.organization;
	}

    /**
     * Setter $organization
     * @param {string} value
     */
	public set $organization(value: string) {
		this.organization = value;
	}

    /**
     * Getter $comments
     * @return {string}
     */
	public get $comments(): string {
		return this.comments;
	}

    /**
     * Setter $comments
     * @param {string} value
     */
	public set $comments(value: string) {
		this.comments = value;
	}
}
