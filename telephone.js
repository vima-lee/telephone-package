class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = new Set();
    }

    //Method in adding a phone number 
    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.add(phoneNumber);
        this.notifyObservers(`Added this ${phoneNumber} to the phonebook.`);
    }

    //Method in removing phone number
    removePhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.phoneNumbers.delete(phoneNumber);
            this.notifyObservers(`Remove this ${phoneNumber} from the phonebook.`);
        } else {
            this.notifyObservers(`This ${phoneNumber} is not found in the phonebook.`);
        }
    }

    //Method in dialing a phone number
    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.has(phoneNumber)) {
            this.notifyObservers(`Dialing ${phoneNumber} grim grim grim...`);
        } else {
            this.notifyObservers(`Can not dial this ${phoneNumber}. Number is not found in the phonebook.`);
        }
    }

    //Method adding an Observer
    addObserver(observer) {
        this.observers.add(observer);
    }

    //Method removing an observer
    removeObserver(observer) {
        this.observers.delete(observer);
    }

    //Method to notify all observers
    notifyObservers(notificationMessage) {
        for (let observer of this.observers) {
            observer.receiveNotification(notificationMessage);
        }
    }
    }

    //Observer class

    class PhoneBookObserver {
        receiveNotification(notificationMessage) {
            console.log(`Phonebook: ${notificationMessage}`);
        }
    }

    // My example :
    const phone = new Telephone();
    const phoneBookObserver = new PhoneBookObserver();

    phone.addObserver(phoneBookObserver);
    phone.addPhoneNumber("2347023232");
    phone.dialPhoneNumber("2347023232");