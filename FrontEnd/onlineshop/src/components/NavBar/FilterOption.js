import { useState } from "react";
function FilterOption({ filter, handleSubmit }) {

    const [minValue, setMinValue] = useState("min");
    const [maxValue, setMaxValue] = useState("max");


    let filterContent;
    const sexFilter = ["M", "F", "C"];
    const categoryFilter = [" ", "Tricou", "Geci", "Sapca", "Incaltaminte", "Lenjerie", "Pulover", "Pantaloni"];
    const brandFilter = [" ", "Gucci", "Versace", "Hugo", "Karl Lagerfeld", "Luis Vuiton", "Zara", "Pull&Bear"]

    const handleMinValue = (event) => {
   
    }

    filterContent = <div>
        <div className="ml-4">
            <select className="border-8 text-black" id="data" >
                {sexFilter.map((option) => <option value={option}>{option}</option>)}
            </select>
        </div>
        <div className="ml-4 mt-3">
            <select className="border-8 text-black" id="data" >
                {categoryFilter.map((option) => <option value={option}>{option}</option>)}
            </select>
        </div>
        <div className="ml-4 mt-3">
            <select className="border-8 text-black" id="data">
                {brandFilter.map((option) => <option value={option}>{option}</option>)}
            </select>
        </div>
        <div className="ml-4 mt-4 inline-flex">
            <div>
                <input className="w-12 text-black text-right" type="number" value={minValue} onChange={(event) => setMinValue(event.target.value)} placeholder="min" ></input>
            </div>
            <div className="text-xl ml-2 mr-2">
                -
            </div>
            <div>
                <input className="w-12 text-black text-right" type="number" value={maxValue} onChange={(event) => setMaxValue(event.target.value)} placeholder="max" ></input>
            </div>
        </div>
    </div>

    const filters = filter.map((option) => {
        return <div className="text-left">
            <div className="mt-4 pb-2">
                {option}:
            </div>
        </div>
    })


    return <div className="mb-2 w-32">
        <div className="inline-flex">
            <div>
                {filters}
            </div>
            {filterContent}
            <button className="button is-primary" style={{ marginLeft: 84, marginTop:145 }}>
                Cautare Filtrata
            </button>
        </div>
    </div>


}

export default FilterOption;