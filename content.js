chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === 'sendEmail') {
      try {
        const response = await fetch('https://websafe-j7xu.onrender.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            recipient: 'shubhamsharmarj.18@gmail.com',
            subject: 'inform',
            body: 'Stop your child from access social website online',
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Email sent:', data);
        } else {
          console.log('Error sending email:', response.statusText);
        }
      } catch (error) {
        console.log('Error sending email:', error);
      }
    }
  });
  