import './style.css'
import { machop } from './pokemones/machop'
import  dudouImg  from "./img/Doduo.png";
import machopImg  from './img/Machop.png';
import { dudou } from './pokemones/doduo'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class>
<h1>Hola ${machop.name} tu id es ${machop.id}</h1>
<img src="${machopImg}" class="logo vanilla" alt="TypeScript logo" />
<h1>Hola ${dudou.name} tu id es ${dudou.id}</h1>
<img src="${dudouImg}" class="logo vanilla" alt="TypeScript logo" />
</div>
`

document.querySelector<HTMLButtonElement>('#counter')!

