// // // Import the Twilio module and initialize the client
// // const twilio = require('twilio');


// // // Example function to send an SMS
// // async function sendSMS(to, from, body) {
// //   try {
// //     const message = await client.messages.create({
// //       body, // Message content
// //       from, // Your Twilio number
// //       to,   // Recipient's phone number
// //     });

// //     console.log(`Message sent with SID: ${message.sid}`);
// //   } catch (error) {
// //     console.error(`Failed to send message: ${error.message}`);
// //   }
// // }

// // // Example usage
// // sendSMS('+918081158775','+14432735301', 'Achal singh SMS concept os build by Aditya but more concept is not build');


// const express = require('express');
// const twilio = require('twilio');
// const index = require('./index')
// const app = express();
// app.use(express.json());

// app.post('/send-sms', async (req, res) => {
//   res.send("index")
//   const { phoneNumber, message } = req.body;

//   try {
//     const response = await client.messages.create({
//       body: message,
//       from: '+14432735301', 
//       to: phoneNumber,
//     });

//     res.status(200).json({ sid: response.sid, message: 'SMS sent successfully!' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });

