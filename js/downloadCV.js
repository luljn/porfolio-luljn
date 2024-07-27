document.getElementById('downloadButton').addEventListener('click', function() {
    // URL of the PDF file
    var pdfUrl = '../files/CV-Lula_Jonathan_MBECK_MBOH.pdf';

    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');

    // Create a new anchor element
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'CV-Lula_Jonathan_MBECK_MBOH.pdf'; // Name of the file to be downloaded

    // Append the anchor to the body (necessary for Firefox)
    document.body.appendChild(a);

    // Trigger the download by simulating a click
    a.click();

    // Remove the anchor from the body
    document.body.removeChild(a);
});
