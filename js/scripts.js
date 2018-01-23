function Account(name, balance) {
  this.name = name;
  this.balance = balance;
}

Account.prototype.withdraw = function(amount) {
  this.balance -= amount;
};

Account.prototype.deposit = function(amount) {
  this.balance += amount;
};


function updateBalance (amount) {
  $("#balance").text(amount)
}

var accounts = Array(0);
var account;
$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();

    account = new Account($("#name").val(), parseInt($("#initialDeposit").val()));
    $("#name").val("")
    $("#initialDeposit").val("")
    updateBalance(account.balance);

    $("#accounts").append("<option value='" + accounts.length + "'>" + account.name + "</option>");
    $("#accounts").val(accounts.length);
    accounts.push(account);
  });

  $("#existing-account").submit(function(event) {
    event.preventDefault();

    var value = $("#withdraw").val();
    if (value !== "") {
      value = parseInt(value);
      if (value <= account.balance)
        account.withdraw(value);
    }
    value = $("#deposit").val();
    if (value !== "") {
      value = parseInt(value);
      account.deposit(value);
    }
    $("#withdraw").val("");
    $("#deposit").val("");
    updateBalance(account.balance);

  });

  $("#accounts").change(function(){
    account = accounts[parseInt($(this).val())];
    updateBalance(account.balance);
  });
});
