import React from 'react';

const FilterOptions = ({onChange}) => {
    return (
        <div className='select'>
        <select onChange={onChange}>
    <option value='none'>Filter By Home Planet or Movie</option>
          <optgroup label="Movies">
          <option value='https://swapi.co/api/films/4/'>Episode 1 The Phantom Menace</option>
          <option value='https://swapi.co/api/films/5/'>Episode 2 Attack of the Clones</option>
          <option value='https://swapi.co/api/films/6/'>Episode 3 Revenge of the Sith</option>
          <option value='https://swapi.co/api/films/1/'>Episode 4 A New Hope</option>
          <option value='https://swapi.co/api/films/2/'>Episode 5 The Empire Strikes Back</option>
          <option value='https://swapi.co/api/films/3/'>Episode 6 Return of the Jedi</option>
          <option value='https://swapi.co/api/films/7/'>Episode 7 The Force Awakens</option>
          </optgroup>
          <optgroup label="Home Planet">
          <option value="https://swapi.co/api/planets/2/">Alderaan</option>
          <option value="https://swapi.co/api/planets/38/">Aleen Minor</option>
          <option value="https://swapi.co/api/planets/6/">Bespin</option>
          <option value="https://swapi.co/api/planets/26/">Bestine IV</option>
          <option value="https://swapi.co/api/planets/18/">Cato Neimoidia</option>
          <option value="https://swapi.co/api/planets/43/">Cerea</option>
          <option value="https://swapi.co/api/planets/32/">Chandrila</option>
          <option value="https://swapi.co/api/planets/50/">Champala</option>
          <option value="https://swapi.co/api/planets/53/">Concord Dawn</option>
          <option value="https://swapi.co/api/planets/22/">Corellia</option>
          <option value="https://swapi.co/api/planets/9/">Coruscant</option>
          <option value="https://swapi.co/api/planets/36/">Dathomir</option>
          <option value="https://swapi.co/api/planets/49/">Dorin</option>
          <option value="https://swapi.co/api/planets/7/">Endor</option>
          <option value="https://swapi.co/api/planets/21/">Eriadu</option>
          <option value="https://swapi.co/api/planets/11/">Geonosis</option>
          <option value="https://swapi.co/api/planets/44/">Glee Anselm</option>
          <option value="https://swapi.co/api/planets/42/">Haruun Kal</option>
          <option value="https://swapi.co/api/planets/47/">Iktotch</option>
          <option value="https://swapi.co/api/planets/45/">Iridonia</option>
          <option value="https://swapi.co/api/planets/59/">Kalee</option>
          <option value="https://swapi.co/api/planets/10/">Kamino</option>
          <option value="https://swapi.co/api/planets/14/">Kashyyyk</option>
          <option value="https://swapi.co/api/planets/35/">Malastare</option>
          <option value="https://swapi.co/api/planets/51/">Mirial</option>
          <option value="https://swapi.co/api/planets/31/">Mon Cala</option>
          <option value="https://swapi.co/api/planets/57/">Muunilinst</option>
          <option value="https://swapi.co/api/planets/8/">Naboo</option>
          <option value="https://swapi.co/api/planets/24/">Nal Hutta</option>
          <option value="https://swapi.co/api/planets/55/">Ojom</option>
          <option value="https://swapi.co/api/planets/48/">Quermia</option>
          <option value="https://swapi.co/api/planets/23/">Rodia</option>
          <option value="https://swapi.co/api/planets/37/">Ryloth</option>
          <option value="https://swapi.co/api/planets/52/">Serenno</option>
          <option value="https://swapi.co/api/planets/58/">Shili</option>
          <option value="https://swapi.co/api/planets/56/">Skako</option>
          <option value="https://swapi.co/api/planets/30/">Socorro</option>
          <option value="https://swapi.co/api/planets/20/">Stewjon</option>
          <option value="https://swapi.co/api/planets/33/">Sullust</option>
          <option value="https://swapi.co/api/planets/1/">Tatooine</option>
          <option value="https://swapi.co/api/planets/34/">Toydaria</option>
          <option value="https://swapi.co/api/planets/29/">Trandosha</option>
          <option value="https://swapi.co/api/planets/40/">Troiken</option>
          <option value="https://swapi.co/api/planets/41/">Tund</option>
          <option value="https://swapi.co/api/planets/60/">Umbara</option>
          <option value="https://swapi.co/api/planets/12/">Utapua</option>
          <option value="https://swapi.co/api/planets/39/">Vulpter</option>
          <option value="https://swapi.co/api/planets/54/">Zolan</option>
          </optgroup>
          </select>
          </div>
          )
}

export default FilterOptions;