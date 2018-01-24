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
  $("h2").fadeIn();
}

function withdrawAnim() {
  $('#chain').css('background-image', 'url(img/raining.webp)');
  var id = setInterval(frame, 5000);
  function frame() {
    $('#chain').css('background-image', 'url(img/chain.png)');
    clearInterval(id);
  }
}

function brokeAnim() {
  $('#chain').css('background-image', 'url(img/john.webp)');
  var id = setInterval(frame, 5000);
  function frame() {
    $('#chain').css('background-image', 'url(img/chain.png)');
    clearInterval(id);
  }
}

function depositAnim() {
  $('#chain').css('background-image', 'url(img/shovel.gif)');
  var id = setInterval(frame, 5000);
  function frame() {
    $('#chain').css('background-image', 'url(img/chain.png)');
    clearInterval(id);
  }
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
      if (value <= account.balance) {
        account.withdraw(value);
        withdrawAnim();
      } else {
        brokeAnim();
      }
    }
    value = $("#deposit").val();
    if (value !== "") {
      value = parseInt(value);
      account.deposit(value);
      depositAnim();
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
