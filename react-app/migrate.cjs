const fs = require('fs');

function htmlToJsx(html) {
    let content = html;
    
    // Convert class to className
    content = content.replace(/class=/g, 'className=');
    content = content.replace(/for=/g, 'htmlFor=');
    
    // Self close tags like img, input, br, hr
    content = content.replace(/<img(.*?)>/g, (match) => {
        if (match.endsWith('/>')) return match;
        return match.replace(/>$/, ' />');
    });
    content = content.replace(/<input(.*?)>/g, (match) => {
        if (match.endsWith('/>')) return match;
        return match.replace(/>$/, ' />');
    });
    content = content.replace(/<br>/g, '<br />');
    content = content.replace(/<hr>/g, '<hr />');
    
    // Attributes
    content = content.replace(/fill-rule/g, 'fillRule');
    content = content.replace(/clip-rule/g, 'clipRule');
    content = content.replace(/stroke-width/g, 'strokeWidth');
    content = content.replace(/stroke-linecap/g, 'strokeLinecap');
    content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');
    content = content.replace(/stroke-miterlimit/g, 'strokeMiterlimit');
    content = content.replace(/autoplay=""/g, 'autoPlay');
    content = content.replace(/loop=""/g, 'loop');
    content = content.replace(/muted=""/g, 'muted');
    
    // Style parsing
    content = content.replace(/style="([^"]*)"/g, (match, p1) => {
        if (!p1.trim()) return `style={{}}`;
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
    
    // Update assets paths
    content = content.replace(/(src|href)="assets\//g, '$1="/assets/');
    content = content.replace(/data-background="assets\//g, 'data-background="/assets/');
    
    return content;
}

// 1. HEADER
let headerPhp = fs.readFileSync('../inc/header.php', 'utf8');
// remove <?php ... ?> blocks
headerPhp = headerPhp.replace(/<\?php[\s\S]*?\?>/g, '');
// The header.php contains <div id="smooth-wrapper"> which we don't want in Header.jsx because Layout.jsx has it.
// Wait, Layout.jsx has <div id="smooth-wrapper">.
// header.php has: <div id="smooth-wrapper"> at line 1, and the rest.
// We will just remove the <div id="smooth-wrapper"> and keep the rest.
headerPhp = headerPhp.replace('<div id="smooth-wrapper">', '');
// Wrap in fragments since it has multiple root elements
headerPhp = `<>\n${headerPhp}\n</>`;
let headerJsx = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst Header = () => {\n  return (\n${htmlToJsx(headerPhp)}\n  );\n};\n\nexport default Header;\n`;
fs.writeFileSync('./src/components/Header.jsx', headerJsx);

// 2. FOOTER
let footerPhp = fs.readFileSync('../inc/footer.php', 'utf8');
// remove <?php ... ?> blocks
footerPhp = footerPhp.replace(/<\?php[\s\S]*?\?>/g, '');
// footer.php ends with </div> which closes smooth-wrapper (in PHP). We remove it.
footerPhp = footerPhp.replace(/<\/div>\s*$/i, '');
let footerJsx = `import React from 'react';\nimport { Link } from 'react-router-dom';\n\nconst Footer = () => {\n  return (\n${htmlToJsx(footerPhp)}\n  );\n};\n\nexport default Footer;\n`;
fs.writeFileSync('./src/components/Footer.jsx', footerJsx);

// 3. HOME (index.php)
let indexPhp = fs.readFileSync('../index.php', 'utf8');
const match = indexPhp.match(/<main>([\s\S]*?)<\/main>/);
let mainContent = match ? match[1] : '';
let homeJsx = `import React from 'react';\n\nconst Home = () => {\n  return (\n    <main>\n${htmlToJsx(mainContent)}\n    </main>\n  );\n};\n\nexport default Home;\n`;
fs.writeFileSync('./src/pages/Home.jsx', homeJsx);

console.log("Migration complete.");
