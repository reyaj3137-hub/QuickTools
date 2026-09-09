// QuickTools - 27 Tools Data & Dynamic Engine

const toolsData = [
    // 📸 1. Image Tools
    { id: "jpg-to-png", name: "JPG to PNG Converter", category: "image", desc: "এক ক্লিকে JPG ছবিকে PNG ফরম্যাটে কনভার্ট করুন।", icon: "📸", url: "tools/jpg-to-png.html" },
    { id: "png-to-jpg", name: "PNG to JPG Converter", category: "image", desc: "PNG ব্যাকগ্রাউন্ড সরিয়ে বা JPG ফরম্যাটে রূপান্তর করুন।", icon: "🖼️", url: "tools/png-to-jpg.html" },
    { id: "webp-converter", name: "WEBP to JPG/PNG", category: "image", desc: "WEBP ছবিকে সহজেই JPG বা PNG তে কনভার্ট করুন।", icon: "🔄", url: "tools/webp-converter.html" },
    { id: "image-resizer", name: "Image Resizer", category: "image", desc: "ছবি পিক্সেল বা ডায়মেনশন অনুযায়ী ছোট-বড় করুন।", icon: "📐", url: "tools/image-resizer.html" },
    { id: "image-compressor", name: "Image Compressor", category: "image", desc: "কোয়ালিটি ঠিক রেখে ছবির MB ফাইল সাইজ KB করুন।", icon: "🗜️", url: "tools/image-compressor.html" },
    { id: "image-to-base64", name: "Image to Base64", category: "image", desc: "যেকোনো ছবিকে Base64 স্ক্রিপ্ট বা কোডে কনভার্ট করুন।", icon: "🔤", url: "tools/image-to-base64.html" },
    { id: "base64-to-image", name: "Base64 to Image", category: "image", desc: "Base64 কোড থেকে মূল ছবি ফেরত আনুন।", icon: "🌆", url: "tools/base64-to-image.html" },
    { id: "color-picker", name: "Color Picker from Image", category: "image", desc: "ছবি থেকে যেখানে ক্লিক করবেন সেখানকার HEX/RGB কোড পান।", icon: "🎨", url: "tools/color-picker.html" },

    // 📝 2. Text Tools
    { id: "word-counter", name: "Word & Character Counter", category: "text", desc: "লেখা বা আর্টিকেলের শব্দ ও অক্ষরের সঠিক হিসাব গপুন।", icon: "📝", url: "tools/word-counter.html" },
    { id: "case-converter", name: "Case Converter", category: "text", desc: "সব লেখা এক ক্লিকে UPPERCASE বা lowercase করুন।", icon: "🔠", url: "tools/case-converter.html" },
    { id: "text-to-speech", name: "Text to Speech Generator", category: "text", desc: "যেকোনো টাইপ করা লেখা ব্রাউজারেই ভয়েস হিসেবে শুনুন।", icon: "🔊", url: "tools/text-to-speech.html" },
    { id: "remove-duplicates", name: "Remove Duplicate Lines", category: "text", desc: "তালিকা বা ডেটা থেকে বার বার আসা লাইনগুলো এক ক্লিকে সরান।", icon: "✂️", url: "tools/remove-duplicates.html" },
    { id: "lorem-ipsum", name: "Lorem Ipsum Generator", category: "text", desc: "ডিজাইন ও টেস্টের জন্য ফ্রি ডামি টেক্সট তৈরি করুন।", icon: "📄", url: "tools/lorem-ipsum.html" },
    { id: "find-replace", name: "Find and Replace Text", category: "text", desc: "লেখার ভেতরের নির্দিষ্ট যেকোনো শব্দ নিমেষে বদলে দিন।", icon: "🔍", url: "tools/find-replace.html" },

    // ⚙️ 3. Utility Tools
    { id: "qr-generator", name: "QR Code Generator", category: "utility", desc: "ওয়েবসাইট লিংক বা টেক্সটের জন্য ফ্রি QR কোড বানান।", icon: "📱", url: "tools/qr-generator.html" },
    { id: "barcode-generator", name: "Barcode Generator", category: "utility", desc: "প্রোডাক্ট বা কাজের জন্য ফ্রি কাস্টম বারকোড তৈরি করুন।", icon: "📊", url: "tools/barcode-generator.html" },
    { id: "password-generator", name: "Strong Password Generator", category: "utility", desc: "নিরাপদ ও শক্তিশালী র্যান্ডম পাসওয়ার্ড জেনারেটর।", icon: "🔒", url: "tools/password-generator.html" },
    { id: "age-calculator", name: "Age Calculator", category: "utility", desc: "বছর, মাস, দিন ও মিনিট অনুযায়ী সঠিক বয়স বের করুন।", icon: "📅", url: "tools/age-calculator.html" },
    { id: "emi-calculator", name: "Loan EMI Calculator", category: "utility", desc: "ব্যাংক বা লোনের মাসিক কিস্তির হিসাব বের করুন।", icon: "🏦", url: "tools/emi-calculator.html" },
    { id: "bmi-calculator", name: "Percentage & BMI Calculator", category: "utility", desc: "শরীরের BMI এবং শতাংশ হিসাব করার সহজ টুল।", icon: "⚖️", url: "tools/bmi-calculator.html" },

    // 👨‍💻 4. Developer Tools
    { id: "json-formatter", name: "JSON Formatter & Validator", category: "dev", desc: "এলোমেলো JSON কোড সুন্দরভাবে সাজিয়ে এরর চেক করুন।", icon: "💻", url: "tools/json-formatter.html" },
    { id: "code-minifier", name: "HTML/CSS/JS Minifier", category: "dev", desc: "কোডের স্পেস কমিয়ে সাইট ফাস্ট করার মিনিফায়ার।", icon: "⚡", url: "tools/code-minifier.html" },
    { id: "url-encoder", name: "URL Encoder / Decoder", category: "dev", desc: "ওয়েব লিংক সেফলি এনকোড ও ডিকোড করার টুল।", icon: "🔗", url: "tools/url-encoder.html" },
    { id: "markdown-previewer", name: "Markdown to HTML Previewer", category: "dev", desc: "মার্কডাউন কোড লিখে সরাসরি HTML আউটপুট দেখুন।", icon: "👁️", url: "tools/markdown-previewer.html" },
    { id: "uuid-generator", name: "UUID Generator", category: "dev", desc: "প্রজেক্টের জন্য ইউনিক আইডেন্টিফায়ার জেনারেট করুন।", icon: "🆔", url: "tools/uuid-generator.html" },

    // 📄 5. Document Tools
    { id: "image-to-pdf", name: "Image to PDF Converter", category: "doc", desc: "ছবি দিয়ে এক ক্লিকে চমৎকার PDF ফাইল তৈরি করুন।", icon: "📑", url: "tools/image-to-pdf.html" },
    { id: "text-to-pdf", name: "Text to PDF Converter", category: "doc", desc: "টাইপ করা লেখা সাথে সাথে PDF ফাইল হিসেবে ডাউনলোড করুন।", icon: "📝", url: "tools/text-to-pdf.html" }
];

// DOM Elements & Rendering
const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');

function renderTools(tools) {
    if (!toolsGrid) return;
    toolsGrid.innerHTML = '';

    if (tools.length === 0) {
        toolsGrid.innerHTML = `
            <div class="col-span-full text-center py-10 text-gray-500">
                <p class="text-lg font-semibold">কোনো টুল পাওয়া যায়নি!</p>
                <p class="text-sm">অন্য কোনো নাম লিখে চেষ্টা করুন।</p>
            </div>
        `;
        return;
    }

    tools.forEach(tool => {
        const card = document.createElement('a');
        card.href = tool.url;
        card.className = 'bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all flex flex-col justify-between group';
        
        card.innerHTML = `
            <div>
                <div class="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    ${tool.icon}
                </div>
                <h3 class="font-bold text-gray-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors">${tool.name}</h3>
                <p class="text-sm text-gray-600 line-clamp-2">${tool.desc}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
                <span>টুল ব্যবহার করুন</span>
                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </div>
        `;
        toolsGrid.appendChild(card);
    });
}

// Live Search Event Listener
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = toolsData.filter(tool => 
            tool.name.toLowerCase().includes(query) || 
            tool.desc.toLowerCase().includes(query) ||
            tool.category.toLowerCase().includes(query)
        );
        renderTools(filtered);
    });
}

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    renderTools(toolsData);
});
