class Dog {
  constructor(breed, purpose) {
    this._breed = breed;
    this._purpose = purpose;
    this._lifespan = 20;
  }
  
  get breed() {
    return this._breed;
  }
  
  get purpose() {
    return this._purpose;
  }
  
  get lifespan() {
    return this._lifespan;
  }
  
  calculateYearsRemaining(yearsLived) {
    this._lifespan -= yearsLived;
  }
}

const dog1 = new Dog('English Mastiff', 'Castle guardian');
const dog2 = new Dog('Irish Wolfhound', 'Hunting wolves');