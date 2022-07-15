function DogFilter({changeFilter, filterOn}) {
    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={changeFilter}>{filterOn ? "Filter good dogs: ON" : "Filter good dogs: OFF"}</button>
        </div>
    )
}

export default DogFilter;