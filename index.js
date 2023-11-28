require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  {
    "login": "premvarma2002",
    "id": 98645019,
    "node_id": "U_kgDOBeE0Gw",
    "avatar_url": "https://avatars.githubusercontent.com/u/98645019?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/premvarma2002",
    "html_url": "https://github.com/premvarma2002",
    "followers_url": "https://api.github.com/users/premvarma2002/followers",
    "following_url": "https://api.github.com/users/premvarma2002/following{/other_user}",
    "gists_url": "https://api.github.com/users/premvarma2002/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/premvarma2002/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/premvarma2002/subscriptions",
    "organizations_url": "https://api.github.com/users/premvarma2002/orgs",
    "repos_url": "https://api.github.com/users/premvarma2002/repos",
    "events_url": "https://api.github.com/users/premvarma2002/events{/privacy}",
    "received_events_url": "https://api.github.com/users/premvarma2002/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Prem Varma",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Am a React developer.",
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 1,
    "following": 3,
    "created_at": "2022-01-29T11:24:18Z",
    "updated_at": "2023-11-23T14:53:46Z"
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
  res.send('Unbreakable_prem')
})

app.get('/login',(req,res) => {
  res.send('<h1>Please login at chai aur code</h1> ')
})

app.get('/yt',(req,res) => {
  res.send('<h2> chai aur code</h2> ')
})

app.get('/github',(req,res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
}) 