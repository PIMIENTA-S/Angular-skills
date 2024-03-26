function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

// TO:DO recordar todos estos conceptos