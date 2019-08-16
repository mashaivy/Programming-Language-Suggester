$(document).ready(function() {
  $("#language").submit(function(event) {
     event.preventDefault();
    var selectedoption =  $("input:radio[name=language]:checked").val();
    if (selectedoption === "C#") {
    $("#cresult").show();

  };
  });
  });


    });
