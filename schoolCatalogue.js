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

class Middle extends School {
    constructor(name) {
        super(name, 'middle')
    }
}

class High extends School {
    constructor(name, sportsTeams) {
        super(name, 'high');
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}