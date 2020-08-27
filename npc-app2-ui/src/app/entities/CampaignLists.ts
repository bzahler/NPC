import { Campaign } from './Campaign';
import { Npc } from './Npc';
import { Location } from './Location';
import { PlayerCharacter } from './PlayerCharacter';


export class CampaignLists {
    public campaignData: Campaign;
    public npcList: Npc[];
    public subLocations: Location[];
    public pcList: PlayerCharacter[];
}