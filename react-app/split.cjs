const fs = require('fs');
const path = require('path');

const homePath = path.join(__dirname, 'src/pages/Home.jsx');
const homeContent = fs.readFileSync(homePath, 'utf8');

const componentsDir = path.join(__dirname, 'src/components/home');
if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
}

// Markers
const sections = [
    { name: 'HeroBanner', start: '<div className="al-hero-seo-area', end: '<div className="creative-brand-area' },
    { name: 'BrandArea', start: '<div className="creative-brand-area', end: '<section className="ai-area">' },
    { name: 'AiArea', start: '<section className="ai-area">', end: '<section className="features-section p-4">' },
    { name: 'FeaturesSection', start: '<section className="features-section p-4">', end: '<section className="configurator-area">' },
    { name: 'ConfiguratorArea', start: '<section className="configurator-area">', end: '<div className="tp-about-area' },
    { name: 'AboutArea', start: '<div className="tp-about-area', end: '<div className="tp-video-area team-work' },
    { name: 'TeamWorkArea', start: '<div className="tp-video-area team-work', end: '<div className="tp-portfolio-it-area' },
    { name: 'PortfolioArea', start: '<div className="tp-portfolio-it-area', end: '<div className="tp-blog-area' },
    { name: 'BlogArea', start: '<div className="tp-blog-area', end: '</main>' }
];

let remainingContent = homeContent;
let imports = [];
let componentTags = [];

sections.forEach((section, index) => {
    let startIndex = remainingContent.indexOf(section.start);
    if (startIndex === -1) {
        console.warn(`Could not find start for ${section.name}`);
        return;
    }
    
    let endIndex = remainingContent.indexOf(section.end, startIndex);
    if (endIndex === -1 && index === sections.length - 1) {
        endIndex = remainingContent.indexOf('</main>');
    }
    
    if (endIndex === -1) {
        console.warn(`Could not find end for ${section.name}`);
        return;
    }

    let componentContent = remainingContent.substring(startIndex, endIndex).trim();
    
    const componentCode = `import React from 'react';\n\nconst ${section.name} = () => {\n  return (\n    ${componentContent}\n  );\n};\n\nexport default ${section.name};\n`;
    
    fs.writeFileSync(path.join(componentsDir, `${section.name}.jsx`), componentCode);
    
    imports.push(`import ${section.name} from '../components/home/${section.name}';`);
    componentTags.push(`      <${section.name} />`);
});

const newHomeContent = `import React from 'react';
${imports.join('\n')}

const Home = () => {
  return (
    <main>
${componentTags.join('\n')}
    </main>
  );
};

export default Home;
`;

fs.writeFileSync(homePath, newHomeContent);
console.log('Components extracted successfully.');
