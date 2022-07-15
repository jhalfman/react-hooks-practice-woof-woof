import Dog from "./Dog";

function DogBar({dogs, showDogInfo, filterOn}) {
    return (
        <div id="dog-bar">
        {dogs.map(dog => {
            if (filterOn) {
                if (dog.isGoodDog) {
                    return <Dog dog={dog} key={dog.name} showDogInfo={showDogInfo}/>
                }
                else return null;
            }
            else return <Dog dog={dog} key={dog.name} showDogInfo={showDogInfo}/> 
        })}
        </div>
    )
    
}

export default DogBar;