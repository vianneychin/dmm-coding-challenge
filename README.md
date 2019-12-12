# dmm-coding-challenge

## 🍕 My Tech Stack Choices

<ul>
  <code>JavaScript</code> | 
  <code>Express/Node</code>
</ul>
<p>I used JavaScript and Node because that's what I am most familiar with. I am a stronger JavaScript developer than I am a PHP developer. I would have loved to do it in PHP/Laravel but I ran into too many problems with getting it to migrate with mySQL.</p>
<br />
<p>I used <code>nanoid</code> for creating shortened url after the main domain name.</p>
<i>i.e., http://localhost:8000/1FSpQuM</i>
<br />

### ⛵️ Starting the application

```bash
git clone https://github.com/vianneychin/dmm-coding-challenge.git
```

```bash
cd dmm-coding-challenge
```

```bash
npm install
```

<br />
<br />
Then inside the server/db.js folder replace:

```js
const databaseUrl = process.env.DATABASE
```

and turn it into this:

```js
const databaseUrl = 'the mongodb url provided as a string'
/*
  i.e., 'mongodb+srv://username:password@url-collection-wdimi.mongodb.net/test?retryWrites=true&w=majority'
*/
```

<br />

<br />
and once you've done that run:

```bash
npm start
```

<br />

#### Then navigate to http://localhost:8000/

<br />

#### 📸 Screenshots

<img src='https://i.imgur.com/ytSaUE8.png' />
<img src='https://i.imgur.com/CngG1sM.png' />
