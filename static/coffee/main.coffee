stopEvent = (event) ->
  event.stopPropagation()
  event.preventDefault()
  return false

$("form").on "submit", (event) ->
    form = this

    sponsors = (r.value for r in form["sponsors"].selectedOptions)
    buildings = (r.value for r in form["buildings"].selectedOptions)
    
    makeRequest { sponsors, buildings }

    stopEvent event
