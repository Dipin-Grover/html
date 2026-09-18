const fs = require('fs');
const missingTerms = [
  'Annotation Tools', 'Aspect Ratio', 'Bluetooth Connectivity', 'Cloud Integration', 'Collaboration Tools', 'Device Management System (DMS)', 'Digital Whiteboard', 'FLN (Foundational Literacy and Numeracy)', 'HDMI (High-Definition Multimedia Interface)', 'Interactive Display', 'Interactive Learning', 'OPS Slot (Open Pluggable Specification)', 'Refresh Rate', 'Screen Mirroring', 'Smart Classroom', 'Touch Pen / Stylus', 'USB Port', 'Anti-Glare Glass', 'Connectivity', 'Contrast Ratio', 'Digital Annotation', 'Embedded Android OS', 'Interactive Apps', 'Interactive Panel Size', 'Network Security', 'Optical Character Recognition (OCR)', 'Screen Calibration', 'Split Screen Functionality', 'Touch Sensitivity', 'Video Conferencing Integration'
];

let addedContent = '';
missingTerms.forEach(term => {
  const slug = term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  addedContent += `
  "${slug}": {
    title: "${term}",
    category: "General Category",
    displayCategory: "Display & Screen",
    publishedDate: "September 17, 2025",
    shortDescription: "Learn more about ${term} and its applications.",
    detailedContent: "Detailed information about ${term} will be updated soon.",
    benefits: [
      "Improves productivity and efficiency.",
      "Enhances the user experience.",
      "Provides reliable and secure performance."
    ],
    relatedTerms: [],
    article: \`
<div class="glossary-article">
  <h3 class="fw-bold mt-5 mb-3" style="font-size: 1.75rem;">Definition</h3>
  <p class="mb-4" style="font-size: 1.1rem; line-height: 1.7; color: #475569;">
    Information about ${term} is currently being updated. Please check back later for a comprehensive guide and details.
  </p>
</div>
    \`,
    faqs: [
      {
        id: 'faq-${slug}-1',
        question: 'What is ${term}?',
        answer: 'Detailed answer for ${term} will be updated soon.'
      }
    ]
  },`;
});

let fileContent = fs.readFileSync('d:/xampp/htdocs/html/react-app/src/data/glossaryContent.js', 'utf8');
const insertIndex = fileContent.lastIndexOf('}');
if (insertIndex !== -1) {
    const updatedContent = fileContent.substring(0, insertIndex) + ',\n' + addedContent + '\n' + fileContent.substring(insertIndex);
    fs.writeFileSync('d:/xampp/htdocs/html/react-app/src/data/glossaryContent.js', updatedContent);
    console.log('Successfully added ' + missingTerms.length + ' terms.');
}
