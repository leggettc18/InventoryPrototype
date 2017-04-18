/*global $*/
function keywordSearch() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("ksInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

function categoryFilter() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("categoryInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (filter == "ALL") {
        tr[i].style.display = "";  
      }
      else if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

function qualityFilter() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("qualityInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (filter == "ALL") {
        tr[i].style.display = "";  
      }
      else if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}

function priceSort(clicked_id) {
  var table, rows, switching, checked, i, x, y, xnum, ynum, shouldSwitch;
  
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("tr");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("td")[3];
      y = rows[i + 1].getElementsByTagName("td")[3];
      
      xnum = parseFloat(x.innerHTML);
      ynum = parseFloat(y.innerHTML);
      
      //check if the two rows should switch place:
      if(clicked_id == "descending"){
        if (xnum < ynum) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
      else {
        if (xnum > ynum) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

var ItemPopup = {
    setup: function() {
        // add hidden 'div' to end of page to display popup:
        var popupDiv = $('<div id="itemInfo"></div>');
        popupDiv.hide().appendTo($('body'));
        $(document).on('click', '.item-show', ItemPopup.getItemInfo);
    },
    getItemInfo: function() {
        $.ajax({type: 'GET',
            url: $(this).attr('href'),
            timeout: 5000,
            success: ItemPopup.showItemInfo,
            error: function(xhrObj, textStatus, exception) {alert('Error!'); }
            //'success' and 'error' functions will be passed 3 args
        });
        return(false);
    },
    showItemInfo: function(data, requestStatus, xhrObject) {
        //center a floater 1/2 as wide and 1/4 as tall as screen
        var oneFourth = Math.ceil($(window).width() / 4);
        $('#itemInfo').css({'left': oneFourth, 'width': 2*oneFourth, 'top': 0.5*oneFourth}).html(data).show();
        //make the Close link in the hidden element work
        $('#closeLink').click(ItemPopup.hideItemInfo);
        return(false); //prevent default link action
    },
    hideItemInfo: function() {
        $('#itemInfo').hide();
        return(false);
    }
};
$(ItemPopup.setup);
