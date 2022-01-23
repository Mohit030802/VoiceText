require('dotenv').config();
const path = require('path');
const sgMail = require('@sendgrid/mail');
const https = require('https');

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", (req, res)=>{
    let index = path.join(__dirname, '/', './public', 'index.html' );
    res.sendFile(index);
})


const send1 = (usermail, title, body) => {
  const SECRET_KEY = `${process.env.SENDGRID_API_KEY}`;
  sgMail.setApiKey(SECRET_KEY);
  const mail = String(process.env.MAIL);
  const msg = {
    to: usermail,
    from: mail, 
    subject: title,
    html: `<strong>${body}</strong>`,
  };
  sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();

}

let data = "";
let enteredTitle= '';
let enteredBody = '';
let i = 0;
app.post("/", (req, res)=>{
  const fetchData = async () => {
    const url = "https://hospitals-ecf29-default-rtdb.firebaseio.com/notes.json";
    https.get(url, res => {
        res.on('data', chunk => {
          data +=chunk;
        });
        res.on('end', () => {
          data = JSON.stringify(data);
          let ans = JSON.parse(data);
          // console.log(typeof ans + " " + ans);
          var result = Object.keys(ans).map((key) => [Number(key), ans[key]]);
          ans = result.toString('utf8')
          console.log(typeof result + " " + ans);
          // ans = ans.toString();
          // ans = ans[Object.keys(ans)[Object.keys(ans).length - 1]];
          // console.log(typeof ans);
          // console.log("chunk-> " + data[data.length-1]);
          // data = JSON.parse(data);
          // var result = Object.keys(data).map((key) => [Number(key), data[key]]);
          // result = result[result.length-1][1];
          // console.log(result);
          // enteredTitle = result.title;
          // enteredBody = result.body;
          // console.log("title : " + enteredTitle);
          // console.log("body : " + enteredBody);
        });
        res.on('end', () => {
          try {
            const email = req.body.email;
            // send1(email.toString('base64'), enteredTitle.toString('base64'), enteredBody.toString('base64'));
          } catch (error) {
            console.log(error);
          }
          });
      }).on('error', err => {
        console.log(err.message);
      });
      
};
if(req.body.email.toString() < 7){
  let notFound = path.join(__dirname, '/', './public', 'notFound.html' );
  res.sendFile(notFound);
}else{
  let successFile = path.join(__dirname, '/', './public', 'success.html' );
  fetchData();
  res.sendFile(successFile);
}
});


app.listen(process.env.PORT || 3000, () => {
  if (process.env.PORT == undefined) {
    console.log("Server is up on the port 3000");
  }else{
    console.log(`Server is up on port ${process.env.port}`);
  }
})









