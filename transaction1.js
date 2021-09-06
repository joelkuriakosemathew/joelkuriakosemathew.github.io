class Bank {
    static getAccountDetails() {
        var accountDetails = {
            1001: { name: "user1", acno: 1001, pin: 4387, password: "userone", balance: 3000 },
            1002: { name: "user2", acno: 1002, pin: 1234, password: "usertwo", balance: 2500 },
            1003: { name: "user3", acno: 1003, pin: 4895, password: "userthree", balance: 5000 },
            1004: { name: "user4", acno: 1004, pin: 2589, password: "userfour", balance: 8900 },
            1005: { name: "user5", acno: 1005, pin: 2555, password: "userfive", balance: 10000 },
        }
        return accountDetails
    }
    static login() {
        var acno = document.querySelector("#acno").value;
        var password = document.querySelector("#pwd").value;
        try {
            if (isNaN(acno)) throw "Not a valid account Number";
        }
        catch (err) {
            alert(err)
        }

        let data = Bank.getAccountDetails()
        if (acno in data) {
            let pwd = data[acno].password;
            if (pwd == password) {
                alert("Successfull login");
                window.location.href = "Useraccount.html";
            }
            else {
                alert("Incorrect Username or Password");
            }
        }
        else {
            alert("User doesnot exist");
        }

    }
    static deposit() {
        var acno = document.querySelector("#acno").value;
        var pin = document.querySelector("#pin").value;
        var amt = Number(document.querySelector("#amt").value);
        let data = Bank.getAccountDetails();
        if (acno in data) {
            let pinn = data[acno].pin;
            if (pin == pinn) {
                data[acno].balance += amt;
                alert("Account has been credited");
                alert(data[acno].balance);
            }
        else {
            alert("pin not valid");
        }    
        }
        else {
            alert("Incorrect Account Details");
        }
    }
    static withdraw() {
        var acno = document.querySelector("#acno").value;
        var pin = document.querySelector("#pin").value;
        var amt = Number(document.querySelector("#amt").value);
        let data = Bank.getAccountDetails();
        if (acno in data) {
            let pinn = data[acno].pin;
            if (pin == pin) {
                data[acno].balance -= amt;
                alert('Account has been debited');
                alert(data[acno].balance);
            }
        else {
            alert("pin not valid");
        }
        }
        else {
            alert("Incorrect Account Details");
        }
        
    }
    static viewbal() {
        var x = document.getElementById('acno').value;
        var data = Bank.getAccountDetails();
        if (x in data) {
            let dname = data[x].name;
            let dbal = data[x].balance;
            document.getElementById('dname').innerHTML = "Hello, " + dname + "!";
            document.getElementById('dbal').innerHTML = "Your current balance is ₹" + dbal + ".";
        }

    }



}
