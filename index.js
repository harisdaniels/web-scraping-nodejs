const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.theguardian.com/international'

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);

        const articles = [];

        $('.fc-item__title', html).each(function() {
             const title = $(this).text().replace(/(\r\n|\n|\r)/gm, "").trim();
            // $(this).attr('href');
            const link = $(this).find('a').attr('href');
            articles.push({
                title,
                link
            });
        });

        console.log(articles);
    }).catch((err) => console.log(err));