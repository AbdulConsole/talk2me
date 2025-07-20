document.getElementById('resourceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const userEmail = document.getElementById('emailForResource').value.trim();

    const subject = "Request for Free Resources";
    const body = `Hello Ms. Chidinma,\n\nI would like to request the free resources. Here is my email: ${userEmail}\n\nThank you.`;

    const mailtoLink = `mailto:abdulconsole@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });