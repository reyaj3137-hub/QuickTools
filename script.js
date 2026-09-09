const toolsData = [
    { id: "jpg-to-png", name: "JPG to PNG Converter", category: "image", desc: "এক ক্লিকে JPG ছবিকে PNG ফরম্যাটে কনভার্ট করুন।", icon: "📸", url: "tools/jpg-to-png.html" },
    { id: "word-counter", name: "Word & Character Counter", category: "text", desc: "লেখা বা আর্টিকেলের শব্দ ও অক্ষরের সঠিক হিসাব জানুন।", icon: "📝", url: "tools/word-counter.html" },
    { id: "qr-generator", name: "QR Code Generator", category: "utility", desc: "ওয়েবসাইট লিংক বা টেক্সটের জন্য ফ্রি QR কোড বানান।", icon: "📱", url: "tools/qr-generator.html" }
];

const toolsGrid = document.getElementById('toolsGrid');
const searchInput = document.getElementById('searchInput');

function renderTools(tools) {
    if (!toolsGrid) return;
    toolsGrid.innerHTML = '';
    tools.forEach(tool => {
        const card = document.createElement('a');
        card.href = tool.url;
        card.className = 'bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between';
        card.innerHTML = `
            <div>
                <div class="text-3xl mb-3">${tool.icon}</div>
                <h3 class="font-bold text-gray-900 text-lg mb-2">${tool.name}</h3>
                <p class="text-sm text-gray-600">${tool.desc}</p>
            </div>
            <span class="mt-4 text-xs font-semibold text-indigo-600">টুল ব্যবহার করুন &rarr;</span>
        `;
        toolsGrid.appendChild(card);
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const filtered = toolsData.filter(tool => tool.name.toLowerCase().includes(query));
        renderTools(filtered);
    });
}

document.addEventListener('DOMContentLoaded', () => renderTools(toolsData));
