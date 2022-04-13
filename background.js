
var mutationObserver = new MutationObserver(function(mutations) {
    var display = false;
    var link = "<a style=\"cursor: pointer;\" title=\"Toevoegen aan Agenda\" class=\"ics\"><img width=\"20px\" src=\"data:image/jpeg;base64,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\">";
    var date = "-";
    var time = "-";
    const maanden = {"januari": 1, "februari": 2, "maart": 3, "april": 4, "mei": 5, "juni": 6, "juli": 7, "augustus": 8, "september": 9, "oktober": 10, "november": 11, "december": 12};


    mutations.forEach(function(mutation) {
        if(mutation.target.id == "popup_window") {
            if(!display && mutation.target.style.display == "block") {
                display = true;
                if($(".popup_content .date").html().indexOf('&nbsp') == -1) {
                    date = $(".popup_content .date").text();
                    time = $(".popup_content .time").text();
                    $(".popup_content .date").html(link+date+'</a>');
                    const myDate = date.split(" ");
                    $( ".ics" ).on( "click", function() {
                        var cal = ics();
                        var title = $(".realtitle").text().trim();
                        var location = $(".popup_content .location").text().trim();
                        var info = $(".popup_content .lower_part").text().trim().replace(/\t/g, '').replace(/\n/g, '\\n\\n').replace("Toelichting", '');
                        var hour = parseInt(time.split(" ")[0].split(":")[0]);
                        var min = time.split(" ")[0].split(":")[1]; 
                        var start = maanden[myDate[1]] + '/' +myDate[0] + '/' +myDate[2] + ' ' + hour + ':' + min;
                        var end = maanden[myDate[1]] + '/' +myDate[0] + '/' +myDate[2] + ' ' + (hour+1) + ':' + min;
                        cal.addEvent(title, info, location, start, end);
                        cal.download('event');
                      });


                }

            } else if(display && mutation.target.style.display == "none") {
                display = false;
            }
        }
    });
  });
  
  mutationObserver.observe(document.documentElement, {
    attributes: true,
    //characterData: true,
    //childList: true,
    subtree: true,
    //attributeFilter: ['display']
    //attributeOldValue: true,
    //characterDataOldValue: true
  });

