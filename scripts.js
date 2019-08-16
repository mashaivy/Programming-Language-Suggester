$(document).ready(function() {
  $("#language").submit(function(event) {
     event.preventDefault();
    var selectedoption =  $("input:radio[name=language]:checked").val();
    if (selectedoption === "C#") {
    $("#cresult").show();
  }else if (selectedoption === "javasc") {
        $("#javascresult").show();
  }else if (selectedoption === "python") {
    $("#pythonresult").show();
  };
  });
  });


    $("#skills").submit(function(event) {
       event.preventDefault();
      var selectedoption =  $("input:radio[name=skills]:checked").val();
      if (selectedoption === "C#") {
      $("#cresult").show();
    }else if (selectedoption === "javasc") {
          $("#javascresult").show();
    }else if (selectedoption === "python") {
      $("#pythonresult").show()


    };
    });


    $("#money").submit(function(event) {
       event.preventDefault();
      var selectedoption =  $("input:radio[name=money]:checked").val();
      if (selectedoption === "C#") {
      $("#cresult").show();
    }else if (selectedoption === "javasc") {
          $("#javascresult").show();
    }else if (selectedoption === "python") {
      $("#pythonresult").show();

    };
    });


      $("#characteristics").submit(function(event) {
         event.preventDefault();
        var selectedoption =  $("input:radio[name=characteristics]:checked").val();
        if (selectedoption === "C#") {
        $("#cresult").show();
      }else if (selectedoption === "javasc") {
            $("#javascresult").show();
      }else if (selectedoption === "python") {
        $("#pythonresult").show();
    };
    });

    $("#name").submit(function(event) {
       event.preventDefault();
      var selectedoption =  $("input:radio[name=name]:checked").val();
      if (selectedoption === "C#") {
      $("#cresult").show();
    }else if (selectedoption === "javasc") {
          $("#javascresult").show();
    }else if (selectedoption === "python") {
      $("#pythonresult").show();
  };
  });
