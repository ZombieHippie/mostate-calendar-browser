(function () { 
template["event"] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"entry\"><h3 class=\"title\">" + (jade.escape(null == (jade_interp = locals.title.$t) ? "" : jade_interp)) + "</h3><div class=\"content\">" + (null == (jade_interp = locals.content.$t) ? "" : jade_interp) + "</div></div>");;return buf.join("");
}}())