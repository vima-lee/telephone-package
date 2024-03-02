# Telephone class
A telephone class that exposes 3 different methods. <br>
* addPhoneNumber
* RemovePhoneNumber
* dialPhoneNumber <br>
The telephone class also maintain a list of observers and it notifies them whenever a phone number is been dialed.<br>
<br>
I updated the telephone class, so it uses the observer pattern (have methods to add, remove and notify observers) <br>
<br>
I created a class for the observer, it have a method that can be called by the telephone class to notify it. <br>
<br>
The telephone class notifies the observer whenever a number is been dialed. <br>
<br>
I added some observers to the telephone class, 'our main focus to the observer telephone class' are two <br>
* the first one printed the phone number
* the second one printed Now Dialing 2347023232