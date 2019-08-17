$(document).ready(function() {
  $("#language").submit(function(event) {
     event.preventDefault();
    var selectedoption =  $("input:radio[name=language]:checked").val();
    if (selectedoption === "C#") {
    $("#cresult").show();
    $("#javascresult, #pythonresult").hide();
  }else if (selectedoption === "javasc") {
        $("#javascresult").show();
        $("#pythonresult, #cresult").hide();
  }else if (selectedoption === "python") {
    $("#pythonresult").show();
    $("#javascresult, #cresult").hide();

  };
  });
  });


    $("#skills").submit(function(event) {
       event.preventDefault();
      var selectedoption =  $("input:radio[name=skills]:checked").val();
      if (selectedoption === "C#") {
      $("#cresult").show();
      $("#javascresult, #pythonresult").hide();
    }else if (selectedoption === "javasc") {
          $("#javascresult").show();
          $("#pythonresult, #cresult").hide();
    }else if (selectedoption === "python") {
      $("#pythonresult").show()
      $("#javascresult, #cresult").hide();
    }else {

    };
    });


    $("#money").submit(function(event) {
       event.preventDefault();
      var selectedoption =  $("input:radio[name=money]:checked").val();
      if (selectedoption === "C#") {
      $("#cresult").show();
      $("#javascresult, #pythonresult").hide();
    }else if (selectedoption === "javasc") {
          $("#javascresult").show();
          $("#pythonresult, #cresult").hide();
    }else if (selectedoption === "python") {
      $("#pythonresult").show();
      $("#javascresult, #cresult").hide();
    };
    });


      $("#characteristics").submit(function(event) {
         event.preventDefault();
        var selectedoption =  $("input:radio[name=characteristics]:checked").val();
        if (selectedoption === "C#") {
        $("#cresult").show();
          $("#javascresult, #pythonresult").hide();
      }else if (selectedoption === "javasc") {
            $("#javascresult").show();
            $("#pythonresult, #cresult").hide();
      }else if (selectedoption === "python") {
        $("#pythonresult").show();
        $("#javascresult, #cresult").hide();
    };
    });

    $("#name").submit(function(event) {
       event.preventDefault();
      var selectedoption =  $("input:radio[name=name]:checked").val();
      if (selectedoption === "C#") {
      $("#cresult").show();
        $("#javascresult, #pythonresult").hide();
    }else if (selectedoption === "javasc") {
      $("#pythonresult, #cresult").hide();
    }else if (selectedoption === "python") {
      $("#pythonresult").show();
        $("#javascresult, #cresult").hide();
    }else {
      alert("Please answer all question");
    }
  };
  });
