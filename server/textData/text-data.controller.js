
const request = require('request');
const bodyparser = require('body-parser');
const Q = require('q');
const accountSid = 'ACa801ed88b159c5a2765254041e70c7f1';
const authToken = 'a2c016d277659b7bb9283232324bd35f';
const client = require('twilio')(accountSid, authToken);
const _ = require('underscore');
module.exports = {
  sendText:
    function(req, res, next) {
    //             console.log('at server file listening for post requests to /text');
    //             console.log(req.body.phoneNumber);
    //                     let options = client.messages.create({
    //                         uri: "https://api.twilio.com/2010-04-01/Accounts/ACa801ed88b159c5a2765254041e70c7f1/Messages.json",
    //                         to: "+" + req.body.phoneNumber,
    //                         from: "+16319047332",
    //                         body: req.body.message,
    //                     }, function(err, message) {
    //                         if(err) return console.log("error here " + err)
    //                         // console.log(message.sid);
    //                     });
    //
    //
    //                     request(options, function(err, res, body) {
    //                         if (err) return console.log(err);
    //                         console.log("this is body in request"+ body);
    //                         res.send(body);
    //                     });
    //                     console.log("this is res: " + res);
    //                     res.send(req.body);
    const options = {
      method: 'GET',
      url: 'https://api.twilio.com/2010-04-01/Accounts/ACa801ed88b159c5a2765254041e70c7f1/Messages.json',
      headers: {
        'postman-token': '9542652f-2abd-87fd-3ffd-831e1f9b4708',
        'cache-control': 'no-cache',
        authorization: 'Basic QUNhODAxZWQ4OGIxNTljNWEyNzY1MjU0MDQxZTcwYzdmMTphMmMwMTZkMjc3NjU5YjdiYjkyODMyMzIzMjRiZDM1Zg==',
        from: '+16319047332',
        to: '+16318355557',
        body: 'hello phone' }
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        console.log(body);
      })
    },
  recieveText: function(req,res){
      let msgFrom = req.body.From;
      let msgBody = req.body.Body;
      res.send(
          `<Response>
            <Message>${msgFrom}. Keep feeling good.</Message>
          </Response>`
      )},
      saveText : function(req,res){
        let msgFrom = req.body.From;
        let msgBody = req.body.Body;
        return createLog({
          phoneNumber: msgFrom,
          message: msgBody
        })
        .fail(function (error) {
          next(error);
        });
      }
}
