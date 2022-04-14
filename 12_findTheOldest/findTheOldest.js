const findTheOldest = function(people) {
    
    return people.reduce( (oldest, current) => {
        const oAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const cAge = getAge(current.yearOfBirth, current.yearOfDeath)

        return cAge > oAge ? current : oldest
    })
}

function getAge(birth, death) {

    if (!death) { death = new Date().getFullYear() }
    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest
