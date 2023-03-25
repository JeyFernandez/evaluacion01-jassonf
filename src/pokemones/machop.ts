import axios from 'axios';
import { MachopAPIResponse } from '../interfaces/machopApiResponse.interface';

export class PokemonMachop{
    constructor(public id: number, public name: string){}
    
    async getMoves(){
        const {data} = await axios.get<MachopAPIResponse>('https://pokeapi.co/api/v2/pokemon/66');
        console.log(`Machop tu primer movimiento es -> ${data.moves[0].move.name}`)
    }
    async getAbility(){
        const {data} = await axios.get<MachopAPIResponse>('https://pokeapi.co/api/v2/pokemon/66');
        console.log(`Machop tu primer avilidad es -> ${data.abilities[0].ability.name}`)
    }
    async getType(){
        const {data} = await axios.get<MachopAPIResponse>('https://pokeapi.co/api/v2/pokemon/66');
        console.log(`Machop tu tipo es -> ${data.types[0].type.name}`)
    }
} 
export const machop = new PokemonMachop(22, 'Machop')
console.log(machop.getMoves());
console.log(machop.getAbility());
console.log(machop.getType());
