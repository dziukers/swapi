import React from 'react';

const FilterOptions = ({ onChange }) => {
    return (
        <div className='select'>
            <select onChange={onChange}>
                <option value='none'>Filter Characters By Movie or Planet</option>
                <optgroup label="Movies">
                    <option value='http://swapi.dev/api/films/4/'>Episode 1 The Phantom Menace</option>
                    <option value='http://swapi.dev/api/films/5/'>Episode 2 Attack of the Clones</option>
                    <option value='http://swapi.dev/api/films/6/'>Episode 3 Revenge of the Sith</option>
                    <option value='http://swapi.dev/api/films/1/'>Episode 4 A New Hope</option>
                    <option value='http://swapi.dev/api/films/2/'>Episode 5 The Empire Strikes Back</option>
                    <option value='http://swapi.dev/api/films/3/'>Episode 6 Return of the Jedi</option>
                </optgroup>
                <optgroup label="Home Planet">
                    <option value="http://swapi.dev/api/planets/2/">Alderaan</option>
                    <option value="http://swapi.dev/api/planets/38/">Aleen Minor</option>
                    <option value="http://swapi.dev/api/planets/6/">Bespin</option>
                    <option value="http://swapi.dev/api/planets/26/">Bestine IV</option>
                    <option value="http://swapi.dev/api/planets/18/">Cato Neimoidia</option>
                    <option value="http://swapi.dev/api/planets/43/">Cerea</option>
                    <option value="http://swapi.dev/api/planets/32/">Chandrila</option>
                    <option value="http://swapi.dev/api/planets/50/">Champala</option>
                    <option value="http://swapi.dev/api/planets/53/">Concord Dawn</option>
                    <option value="http://swapi.dev/api/planets/22/">Corellia</option>
                    <option value="http://swapi.dev/api/planets/9/">Coruscant</option>
                    <option value="http://swapi.dev/api/planets/36/">Dathomir</option>
                    <option value="http://swapi.dev/api/planets/49/">Dorin</option>
                    <option value="http://swapi.dev/api/planets/7/">Endor</option>
                    <option value="http://swapi.dev/api/planets/21/">Eriadu</option>
                    <option value="http://swapi.dev/api/planets/11/">Geonosis</option>
                    <option value="http://swapi.dev/api/planets/44/">Glee Anselm</option>
                    <option value="http://swapi.dev/api/planets/42/">Haruun Kal</option>
                    <option value="http://swapi.dev/api/planets/47/">Iktotch</option>
                    <option value="http://swapi.dev/api/planets/45/">Iridonia</option>
                    <option value="http://swapi.dev/api/planets/59/">Kalee</option>
                    <option value="http://swapi.dev/api/planets/10/">Kamino</option>
                    <option value="http://swapi.dev/api/planets/14/">Kashyyyk</option>
                    <option value="http://swapi.dev/api/planets/35/">Malastare</option>
                    <option value="http://swapi.dev/api/planets/51/">Mirial</option>
                    <option value="http://swapi.dev/api/planets/31/">Mon Cala</option>
                    <option value="http://swapi.dev/api/planets/57/">Muunilinst</option>
                    <option value="http://swapi.dev/api/planets/8/">Naboo</option>
                    <option value="http://swapi.dev/api/planets/24/">Nal Hutta</option>
                    <option value="http://swapi.dev/api/planets/55/">Ojom</option>
                    <option value="http://swapi.dev/api/planets/48/">Quermia</option>
                    <option value="http://swapi.dev/api/planets/23/">Rodia</option>
                    <option value="http://swapi.dev/api/planets/37/">Ryloth</option>
                    <option value="http://swapi.dev/api/planets/52/">Serenno</option>
                    <option value="http://swapi.dev/api/planets/58/">Shili</option>
                    <option value="http://swapi.dev/api/planets/56/">Skako</option>
                    <option value="http://swapi.dev/api/planets/30/">Socorro</option>
                    <option value="http://swapi.dev/api/planets/20/">Stewjon</option>
                    <option value="http://swapi.dev/api/planets/33/">Sullust</option>
                    <option value="http://swapi.dev/api/planets/1/">Tatooine</option>
                    <option value="http://swapi.dev/api/planets/34/">Toydaria</option>
                    <option value="http://swapi.dev/api/planets/29/">Trandosha</option>
                    <option value="http://swapi.dev/api/planets/40/">Troiken</option>
                    <option value="http://swapi.dev/api/planets/41/">Tund</option>
                    <option value="http://swapi.dev/api/planets/60/">Umbara</option>
                    <option value="http://swapi.dev/api/planets/12/">Utapua</option>
                    <option value="http://swapi.dev/api/planets/39/">Vulpter</option>
                    <option value="http://swapi.dev/api/planets/54/">Zolan</option>
                </optgroup>
            </select>
        </div>
    )
}

export default FilterOptions;