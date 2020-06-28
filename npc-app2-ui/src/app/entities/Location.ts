import { Npc } from './Npc';

export class Location {
    public locationId: string;
    public name: string;
    public summary: string;
    public dmDesc: string;
    public playerDesc: string;
    public listNpc: Npc[];
    public listSubLocation: Location[];
}