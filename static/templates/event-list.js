(function () { 
template["event-list"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (console, JSON, moment, y) {
buf.push("<table class=\"table\"><tbody>");
var events = locals.entry
if ( events != null && events.length !== 0)
{
console.log(JSON.stringify(events[0],null,2))
var currentDay = null, when, where, x, loc, entlink, temp
// iterate events
;(function(){
  var $$obj = events;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var evt = $$obj[$index];

when = evt.gd$when[0]
where = evt.gd$where[0]
x = moment(when.startTime)
y = x.clone().add(moment(when.endTime)).subtract(x)
if ( currentDay == null || !currentDay.isSame(x, "d"))
{
currentDay = x.clone()
buf.push("<tr class=\"day\"><td colspan=\"4\" class=\"no-b\"><h2>" + (jade.escape(null == (jade_interp = currentDay.format("dddd")) ? "" : jade_interp)) + "</h2><p>" + (jade.escape(null == (jade_interp = currentDay.format("MMMM Do")) ? "" : jade_interp)) + "</p></td></tr>");
}
buf.push("<tr><td colspan=\"3\"><a" + (jade.attr("href", evt.link[0].href, true, false)) + " target=\"calendar_entry\"><h3>" + (jade.escape(null == (jade_interp = evt.title.$t) ? "" : jade_interp)) + "</h3></a></td><td class=\"m-t\">");
temp = x.format("h:mma")
buf.push("<h3>" + (jade.escape(null == (jade_interp = temp=="12:00am"?"All day":temp) ? "" : jade_interp)) + "</h3></td></tr><tr><td colspan=\"2\" width=\"50%\" class=\"no-b text-center\"></td><td colspan=\"2\" class=\"no-b\">");
loc = where.valueString
if(typeof loc === "string"){ if(loc.length > 30) { loc = loc.slice(0, 30).replace(/\s\S+$/,"") + "..." } loc += " "}
entlink = where.gd$entryLink
if ( entlink && entlink.gd$entry && entlink.gd$entry.link && entlink.gd$entry.link.length && entlink.gd$entry.link[0].href)
{
buf.push("<a" + (jade.attr("href", entlink.gd$entry.link[0].href, true, false)) + " target=\"calendar_entry\"><small class=\"loc\">" + (jade.escape(null == (jade_interp = loc) ? "" : jade_interp)) + "</small></a>");
}
else
{
buf.push("<small class=\"loc\">" + (jade.escape(null == (jade_interp = loc) ? "" : jade_interp)) + "</small>");
}
buf.push("<small>" + (jade.escape(null == (jade_interp = x.fromNow()) ? "" : jade_interp)) + "</small></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var evt = $$obj[$index];

when = evt.gd$when[0]
where = evt.gd$where[0]
x = moment(when.startTime)
y = x.clone().add(moment(when.endTime)).subtract(x)
if ( currentDay == null || !currentDay.isSame(x, "d"))
{
currentDay = x.clone()
buf.push("<tr class=\"day\"><td colspan=\"4\" class=\"no-b\"><h2>" + (jade.escape(null == (jade_interp = currentDay.format("dddd")) ? "" : jade_interp)) + "</h2><p>" + (jade.escape(null == (jade_interp = currentDay.format("MMMM Do")) ? "" : jade_interp)) + "</p></td></tr>");
}
buf.push("<tr><td colspan=\"3\"><a" + (jade.attr("href", evt.link[0].href, true, false)) + " target=\"calendar_entry\"><h3>" + (jade.escape(null == (jade_interp = evt.title.$t) ? "" : jade_interp)) + "</h3></a></td><td class=\"m-t\">");
temp = x.format("h:mma")
buf.push("<h3>" + (jade.escape(null == (jade_interp = temp=="12:00am"?"All day":temp) ? "" : jade_interp)) + "</h3></td></tr><tr><td colspan=\"2\" width=\"50%\" class=\"no-b text-center\"></td><td colspan=\"2\" class=\"no-b\">");
loc = where.valueString
if(typeof loc === "string"){ if(loc.length > 30) { loc = loc.slice(0, 30).replace(/\s\S+$/,"") + "..." } loc += " "}
entlink = where.gd$entryLink
if ( entlink && entlink.gd$entry && entlink.gd$entry.link && entlink.gd$entry.link.length && entlink.gd$entry.link[0].href)
{
buf.push("<a" + (jade.attr("href", entlink.gd$entry.link[0].href, true, false)) + " target=\"calendar_entry\"><small class=\"loc\">" + (jade.escape(null == (jade_interp = loc) ? "" : jade_interp)) + "</small></a>");
}
else
{
buf.push("<small class=\"loc\">" + (jade.escape(null == (jade_interp = loc) ? "" : jade_interp)) + "</small>");
}
buf.push("<small>" + (jade.escape(null == (jade_interp = x.fromNow()) ? "" : jade_interp)) + "</small></td></tr>");
    }

  }
}).call(this);

}
else
{
buf.push("<tr><td colspan=\"4\" class=\"text-center\"><h3>No events found</h3><br/><br/></td></tr>");
}
buf.push("</tbody></table>");}.call(this,"console" in locals_for_with?locals_for_with.console:typeof console!=="undefined"?console:undefined,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"moment" in locals_for_with?locals_for_with.moment:typeof moment!=="undefined"?moment:undefined,"y" in locals_for_with?locals_for_with.y:typeof y!=="undefined"?y:undefined));;return buf.join("");
}}())