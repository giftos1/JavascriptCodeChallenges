// Create a method in the Person class which returns how another person's age compares.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(otherPerson) {
        if (otherPerson.age > this.age) {
            return `${otherPerson.name} is older than me`
        }
        else if (otherPerson.age < this.age) {
            return `${otherPerson.name} is younger than me`
        }
        else {
            return`${otherPerson.name} is the same age as me.`
        }
    }
}

p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)

console.log(p1.compareAge(p2))
console.log(p2.compareAge(p1))
console.log(p1.compareAge(p3))