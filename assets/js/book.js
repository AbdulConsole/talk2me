document.getElementById('bookingForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const message = document.getElementById('message').value.trim();

      const text = `*🥇 Talk2me Consultation Booking 🥇*

👤 *Full Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
📅 *Preferred Date:* ${date}
⏰ *Preferred Time:* ${time}
📝 *Message:* ${message || 'N/A'}`;

      const whatsappURL = `https://wa.me/2349026331952?text=${encodeURIComponent(text)}`;
      window.open(whatsappURL, '_blank');
    });