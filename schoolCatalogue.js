class School {
    constructor(name, level) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = 0
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumber) {
        this._numberOfStudents = newNumber;
    }

    quickFacts() {
        return `Name: ${this._name}  Level: ${this._level}  # of Students: ${this._numberOfStudents}`
    }

    static pickSubstituteTeacher() {
        const subTeachers = ['Mrs. Macalonen', 'Mrs. Lawson', 'Mrs. Martin', 'Mr. Laubacher', 'Mr. Marko', 'Ms. Brill'];
        const randSubTeacher = subTeachers[Math.floor(Math.random() * subTeachers.length)];
        return randSubTeacher;
    }
}

class Primary extends School {
    constructor(name, pickupPolicy) {
        super(name, 'primary');
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

const lakePrimary = new Primary('Lake Primary', 'Pick-Up your dang kids');

console.log(lakePrimary);

console.log(lakePrimary.pickupPolicy);

console.log(lakePrimary.quickFacts());


