import axios from "axios"
import { DudouAPIResponse } from '../interfaces/dudouApiResponse.interface';
export class PokemonDudou{
    constructor(public id:number, public name: string){}
    async getMoves(){
        const {data} = await axios.get<DudouAPIResponse>('https://pokeapi.co/api/v2/pokemon/84');
        console.log(`Dudou tu primer movimiento es -> ${data.moves[0].move.name}`)
    }
    async getAbility(){
        const {data} = await axios.get<DudouAPIResponse>('https://pokeapi.co/api/v2/pokemon/84');
        console.log(`Dudou tu primer avilidad es -> ${data.abilities[0].ability.name}`)
    }
    async getType(){
        const {data} = await axios.get<DudouAPIResponse>('https://pokeapi.co/api/v2/pokemon/84');
        console.log(`Dudou tu tipo es -> ${data.types[0].type.name}`)
    } 
}
export const dudou = new PokemonDudou(84,'Dudou')
console.log(dudou.getAbility());
console.log(dudou.getMoves());
console.log(dudou.getType());

