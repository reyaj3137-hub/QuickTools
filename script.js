const toolsData = [
    // Image Tools
    { id: "jpg-to-png", name: "JPG to PNG Converter", category: "image", desc: "Convert JPG images to PNG format instantly in your browser.", icon: "📸", url: "tools/jpg-to-png.html" },
    { id: "png-to-jpg", name: "PNG to JPG Converter", category: "image", desc: "Convert PNG images to JPG with customizable quality.", icon: "🖼️", url: "tools/png-to-jpg.html" },
    { id: "webp-converter", name: "WEBP Converter", category: "image", desc: "Convert WEBP files to standard JPG or PNG format.", icon: "🔄", url: "tools/webp-converter.html" },
    { id: "image-resizer", name: "Image Resizer", category: "image", desc: "Resize image dimensions by width, height, or percentage.", icon: "📐", url: "tools/image-resizer.html" },
    { id: "image-compressor", name: "Image Compressor", category: "image", desc: "Reduce image file size without losing original quality.", icon: "🗜️", url: "tools/image-compressor.html" },
    { id: "image-to-base64", name: "Image to Base64", category: "image", desc: "Encode image files directly into Base64 string format.", icon: "🔤", url: "tools/image-to-base64.html" },
    { id: "base64-to-image", name: "Base64 to Image", category: "image", desc: "Decode Base64 string back into downloadable image.", icon: "🌆", url: "tools/base64-to-image.html" },
    { id: "color-picker", name: "Image Color Picker", category: "image", desc: "Extract HEX and RGB color codes from any image.", icon: "🎨", url: "tools/color-picker.html" },

    // Text Tools
    { id: "word-counter", name: "Word & Character Counter", category: "text", desc: "Count words, characters, sentences, and reading time.", icon: "📝", url: "tools/word-counter.html" },
    { id: "case-converter", name: "Case Converter", category: "text", desc: "Transform text to UPPERCASE, lowercase, Title Case.", icon: "🔠", url: "tools/case-converter.html" },
    { id: "text-to-speech", name: "Text to Speech", category: "text", desc: "Convert typed text into audible spoken voice.", icon: "🔊", url: "tools/text-to-speech.html" },
    { id: "remove-duplicates", name: "Remove Duplicate Lines", category: "text", desc: "Clean up lists by deleting repeated text lines.", icon: "✂️", url: "tools/remove-duplicates.html" },
    { id: "lorem-ipsum", name: "Lorem Ipsum Generator", category: "text", desc: "Generate placeholder text for design mockups.", icon: "📄", url: "tools/lorem-ipsum.html" },
    { id: "find-replace", name: "Find and Replace Text", category: "text", desc: "Search and replace target keywords across text.", icon: "🔍", url: "tools/find-replace.html" },

    // Utility Tools
    { id: "qr-generator", name: "QR Code Generator", category: "utility", desc: "Create downloadable QR codes for URLs and text.", icon: "📱", url: "tools/qr-generator.html" },
    { id: "barcode-generator", name: "Barcode Generator", category: "utility", desc: "Generate customized product barcodes online.", icon: "📊", url: "tools/barcode-generator.html" },
    { id: "password-generator", name: "Strong Password Generator", category: "utility", desc: "Generate secure random passwords instantly.", icon: "🔒", url: "tools/password-generator.html" },
    { id: "age-calculator", name: "Age Calculator", category: "utility", desc: "Calculate exact age in years, months, and days.", icon: "📅", url: "tools/age-calculator.html" },
    { id: "emi-calculator", name: "Loan EMI Calculator", category: "utility", desc: "Calculate monthly loan interest and payments.", icon: "🏦", url: "tools/emi-calculator.html" },
    { id: "bmi-calculator", name: "BMI Calculator", category: "utility", desc: "Calculate Body Mass Index and healthy weight range.", icon: "⚖️", url: "tools/bmi-calculator.html" },

    // Dev Tools
    { id: "json-formatter", name: "JSON Formatter", category: "dev", desc: "Format, validate, and beautify raw JSON data.", icon: "💻", url: "tools/json-formatter.html" },
    { id: "code-minifier", name: "HTML/CSS/JS Minifier", category: "dev", desc: "Compress web code to improve site loading speed.", icon: "⚡", url: "tools/code-minifier.html" },
    { id: "url-encoder", name: "URL Encoder / Decoder", category: "dev", desc: "Encode and decode special characters in URLs.", icon: "🔗", url: "tools/url-encoder.html" },
    { id: "markdown-previewer", name: "Markdown Previewer", category: "dev", desc: "Render Markdown syntax into live HTML preview.", icon: "👁️", url: "tools/markdown-previewer.html" },
    { id: "uuid-generator", name: "UUID Generator", category: "dev", desc: "Generate unique version-4 UUID identifiers.", icon: "🆔", url: "tools/uuid-generator.html" },

    // Document Tools
    { id: "image-to-pdf", name: "Image to PDF Converter", category: "doc", desc: "Combine multiple images into a single PDF file.", icon: "📑", url: "tools/image-to-pdf.html" },
    { id: "text-to-pdf", name: "Text to PDF Converter", category: "doc", desc: "Convert raw text documents into downloadable PDF.", icon: "📝", url: "tools/text-to-pdf.html" }
];

const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');

function renderTools(tools) {
    if (!toolsGrid) return;
    toolsGrid.innerHTML = '';
    
    if (tools.length === 0) {
        toolsGrid.innerHTML = `<div class="col-span-full text-center py-10 text-gray-500">No tools found matching your search.</div>`;
        return;
    }

    tools.forEach(tool => {
        const card = document.createElement('a');
        card.href = tool.url;
        card.className = 'bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all flex flex-col justify-between group';
        card.innerHTML = `
            <div>
                <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">${tool.icon}</div>
                <h3 class="font-bold text-gray-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors">${tool.name}</h3>
                <p class="text-sm text-gray-600">${tool.desc}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                <span>Use Tool</span>
                <span>&rarr;</span>
            </div>
        `;
        toolsGrid.appendChild(card);
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = toolsData.filter(tool => tool.name.toLowerCase().includes(query) || tool.desc.toLowerCase().includes(query));
        renderTools(filtered);
    });
}

document.addEventListener('DOMContentLoaded', () => renderTools(toolsData));
