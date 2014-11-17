this.makeRequest = do ->
  displayElement = $ "#entry-list"


  reduceParameter = (value) ->
    encodeURIComponent(value.join?(".") or String(value))


  displayData = (data) ->
    displayElement.html(template["event-list"](data.feed))
    
  # return makeRequest method
  (params) ->
    url = "http://missouristate.info/feeds/calendar.aspx?" +
      "timespan=future&admittance=either" +
      "&recurrences=none&campus=s&alt=json"
    for key, value of params
      url += "&#{key}=#{reduceParameter(value)}"


    $.getJSON url, (data) ->
      displayData data