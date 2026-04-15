// Add line numbers to code blocks
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('pre').forEach(function(pre) {
        // Skip if already processed
        if (pre.classList.contains('lined')) return;
        pre.classList.add('lined');
        
        // Get the raw text content, preserving whitespace
        const text = pre.textContent;
        const lines = text.split('\n');
        
        // Remove empty first/last lines from formatting
        if (lines[0].trim() === '') lines.shift();
        if (lines[lines.length - 1].trim() === '') lines.pop();
        
        const code = document.createElement('code');
        lines.forEach(function(line) {
            const span = document.createElement('span');
            span.className = 'line';
            span.textContent = line || ' ';
            code.appendChild(span);
        });
        
        pre.textContent = '';
        pre.appendChild(code);
    });
});
