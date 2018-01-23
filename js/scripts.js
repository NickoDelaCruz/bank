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




var account;
$(document).ready(function() {
  $("#new-account").submit(function(event) {
    event.preventDefault();

    account = new Account($("#name").val(), parseInt($("#initialDeposit").val()));
    console.log(account);

    account.withdraw(23412);
  });
});
