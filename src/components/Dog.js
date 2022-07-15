function Dog({dog, showDogInfo}) {

    return (
        <span onClick={() => showDogInfo(dog)}>{dog.name}</span>
    )
}

export default Dog;