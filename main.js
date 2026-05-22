function copyBibTeX() {
    const bibtexText = document.getElementById('bibtex-code').innerText;

    navigator.clipboard.writeText(bibtexText).then(() => {
        const button = document.getElementById('copy-button');
        const icon = button.querySelector('.copy-icon');

        button.classList.add('copied');
        icon.src = 'assets/icons/check.svg';

        setTimeout(() => {
            icon.src = 'assets/icons/copy.svg';
            button.classList.remove('copied');
        }, 1000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}