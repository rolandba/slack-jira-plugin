var slackbot = require('./lib/bot');

var config = {

  showIssueDetails: false,
  issueDetailsToShow: {'fields.summary':1 , 'fields.assignee' : 1, 'fields.creator' : 0, 'fields.description': 0},
  showDetailsByDefault: true,//if true, you don't need the '+' to get details
  bot_name: "profik",//Provide the name to post under
  token: 'xoxp-10402129985-10402130001-46702463091-85d580c9bc', // https://api.slack.com/web
  jira_urls: {
    // DEFAULT NODE IS REQUIRED.
    "DEFAULT": {url: "https://default.jira.server/browse/"},
    "": {url:"https://www.profesia.sk/reporter3/report/"}
  },
  search_cmd: "search",
  //Since search results can be verbose, you may not want to muddy the channel
  search_output_chan: "this",//if the value is "this", then the current channel will be used, else the name of a channel
  projects: [""],
  post: true,
  verbose: true,
  custom_texts: {
    messagePrefix: "Cau, sikne sa aj linka na reporter: " //message you might like to prefix to JiraBot's post
  },
  emoji: "", // be sure to upload your custom emoji in slack
  link_separator: ", ",// use \n if you want new lines
  error_channel: '' //the id of the channel to send low level log errors.  If not defined, will use the current channel
};

//DO NOT EDIT BELOW HERE
var slackbot = new slackbot.Bot(config);
slackbot.run();
