import fetch from 'isomorphic-unfetch';

const edamamBaseUrl = process.env.EDAMAM_BASE_URL;
const edamamAppId = process.env.EDAMAM_APP_ID;
const edamamAppKey = process.env.EDAMAM_APP_KEY;

const handler = async (req, res) => {
  let url = `${edamamBaseUrl}?type=public&app_id=${edamamAppId}&app_key=${edamamAppKey}`

  switch (req.method) {
    case 'POST':
      const body = JSON.parse(req.body);
      url += `&q=${body.query}`;
      const output = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      }).then(result => {
        if (result.ok) {
          res.status(200);
          return result.json();
        }
        
        res.status(500);
        return {};
      }).then(data => {
        return data;
      });

      res.json(output);
      res.end();
      return;
    default:
      res.status(403).end('Method not allowed.');
      return;
  }
}

export default handler;
