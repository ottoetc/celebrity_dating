$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val())
    var gender = $("select#gender").val();

    var results = ("");
    if (gender === 'male' && age <= 50) {
      results = Amy Poehler;
    }
    else if (gender === "male" && age > 50) {
      results = Helen Mirren;
    }
    else if (gender === "female" && age <=50) {
      results = Adam Scott;
    }

    else if (gender === "female" && age > 50) {
      results = Dustin Hoffman;
    }

    else {
      alert('Please enter your age.');
    }

    event.preventDefault();
  });
});
