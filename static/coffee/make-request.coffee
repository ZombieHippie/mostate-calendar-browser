this.makeRequest = do ->
  displayElement = $ "#entry-list"


  reduceParameter = (value) ->
    encodeURIComponent(value.join?(".") or String(value))


  displayData = (data) ->
    console.log displayElement
    displayElement.html ""

    if data.feed?.entry?.length
      for entry in data.feed.entry
        console.log entry
        displayElement.append(template.event(entry))

    else
      displayElement.append("<em>no events</em>")

  # return makeRequest method
  (params) ->
    url = "http://missouristate.info/feeds/calendar.aspx?" +
      "timespan=future&admittance=either" +
      "&recurrences=distinct&campus=s&alt=json"
    for key, value of params
      url += "&#{key}=#{reduceParameter(value)}"


    $.getJSON url, (data) ->
      displayData data