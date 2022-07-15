function DogInfo({dog, toggleGoodDog}) {
    return (
        <div id="dog-info">
            <img src={dog.image} alt={dog.name}></img>
            <h2>{dog.name}</h2>
            <button onClick={toggleGoodDog}>{dog.isGoodDog ? "GOOD DOG!" : "BAD DOG!"}</button>
        </div>
    )
}

export default DogInfo;