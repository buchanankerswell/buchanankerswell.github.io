---
permalink: /teaching/
title: "Teaching"
toc: true
toc_sticky: true
toc_label: Documents
---
## Teaching Philosophy

<div>
  <iframe 
    src="{{ 'assets/html/philosophy.html' | relative_url }}" 
    width="100%" 
    height="1200px" 
    style="border: none;">
  </iframe>
</div>

## Teaching Record

<div>
  <iframe 
    src="{{ 'assets/html/record.html' | relative_url }}" 
    width="100%" 
    height="1200px" 
    style="border: none;">
  </iframe>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const iframe = document.querySelector('iframe');
    iframe.onload = function() {
      const iframeDocument = iframe.contentWindow.document;
      iframeDocument.addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'a' && target.href) {
          event.preventDefault();  // Prevent the link from opening inside the iframe
          window.top.location.href = target.href;  // Open the link in the top window
        }
      });
    };
  });
</script>
