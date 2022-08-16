const concatArraysA = (character, ...arraysOfStrings) => {
    let newArray = Array.from(new Set([...arraysOfStrings.flat(Infinity)]));
    newArray = newArray.map(item => item.trim()).filter(item => !item.includes(character));
    return newArray;
};

const firstFunction = (character, ...arraysOfStrings) => {
    let newArray = [...arraysOfStrings.flat(Infinity)].filter(item => !item.includes(character));
    return newArray;
};

const secondFunction = (firstResult) => {
    let newArray = Array.from(new Set(firstResult));
    return newArray;
};

const thirdFunction = (secondResult) => {
    let newArray = secondResult.map(item => item.trim());
    return newArray;
};

const concatArrays = (character2, ...arraysOfStrings2) => {
    return (
        thirdFunction(
            secondFunction(
                firstFunction(character2, ...arraysOfStrings2)
            )
        )
    )
};

export default concatArrays;