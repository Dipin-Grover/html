const fs = require('fs');

let html = fs.readFileSync('../index.php', 'utf8');

// extract <main>
const match = html.match(/<main>([\s\S]*?)<\/main>/);
if (!match) {
    console.error("Could not find <main>");
    process.exit(1);
}

let mainContent = match[1];

// Remove commented out code to make it cleaner
mainContent = mainContent.replace(/<!--[\s\S]*?-->/g, '');

// Convert class to className
mainContent = mainContent.replace(/class=/g, 'className=');

// Self close tags like img, input, br, hr
mainContent = mainContent.replace(/<img(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
});
mainContent = mainContent.replace(/<input(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
});
mainContent = mainContent.replace(/<br>/g, '<br />');
mainContent = mainContent.replace(/<hr>/g, '<hr />');

// Attributes
mainContent = mainContent.replace(/fill-rule/g, 'fillRule');
mainContent = mainContent.replace(/clip-rule/g, 'clipRule');
mainContent = mainContent.replace(/stroke-width/g, 'strokeWidth');
mainContent = mainContent.replace(/stroke-linecap/g, 'strokeLinecap');
mainContent = mainContent.replace(/stroke-linejoin/g, 'strokeLinejoin');
mainContent = mainContent.replace(/autoplay=""/g, 'autoPlay');
mainContent = mainContent.replace(/loop=""/g, 'loop');
mainContent = mainContent.replace(/muted=""/g, 'muted');
mainContent = mainContent.replace(/style="([^"]*)"/g, (match, p1) => {
    // style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
    let styleObj = {};
    p1.split(';').forEach(s => {
        let parts = s.split(':');
        if (parts.length === 2) {
            let key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            let value = parts[1].trim();
            if (key) styleObj[key] = value;
        }
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

// Update assets paths to reflect public folder if needed, or leave as is.
// React uses relative paths or absolute. Since assets are in /assets
mainContent = mainContent.replace(/(src|href)="assets\//g, '$1="/assets/');
mainContent = mainContent.replace(/data-background="assets\//g, 'data-background="/assets/');

const jsx = `import React from 'react';

const Home = () => {
  return (
    <main>
${mainContent}
    </main>
  );
};

export default Home;
`;

fs.writeFileSync('./src/pages/Home.jsx', jsx);
console.log("Done");
