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

cats = {}

this.toggleCat = (checked, cat) ->
  $ "#sponsors"
    .children "."+cat
    .each ->
      @selected = checked
      true
  if checked
    cats[cat] = true
  else
    delete cats[cat]
  for caty of cats
    $ "#sponsors"
      .children "."+caty
      .each ->
        @selected = true