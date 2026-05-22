function copyBibTeX() {
    const bibtexText = document.getElementById('bibtex-code').innerText;

    // Helper function to handle the UI changes on success.
    const showSuccess = () => {
        const button = document.getElementById('copy-button');
        const icon = button.querySelector('.copy-icon');

        button.classList.add('copied');
        icon.src = 'assets/icons/check.svg';

        setTimeout(() => {
            icon.src = 'assets/icons/copy.svg';
            button.classList.remove('copied');
        }, 1000);
    };

    // 1. Try modern Clipboard API.
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(bibtexText)
            .then(showSuccess)
            .catch(err => console.error('Failed to copy text: ', err));
    }
    // 2. Fallback for mobile/HTTP environments.
    else {
        const textArea = document.createElement("text-area");
        textArea.value = bibtexText;

        // Hide the text are off-screen.
        textArea.style.position = "absolute";
        textArea.style.left = "-999999px";
        document.body.prepend(textArea);

        textArea.select();
        try {
            document.execCommand('copy');
            showSuccess();
        } catch (error) {
            console.error('Fallback copy failed: ', error);
        } finally {
            textArea.remove();
        }
    }
}