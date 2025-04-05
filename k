// import cron from "node-cron";
// import { Borrow } from "../models/borrowModel.js";
// import { User } from "../models/userModel.js";
// import { sendEmail } from "../utils/sendEmail.js";

// export const notifyUsers = () => {
//   cron.schedule("*/10 * * * * *", async () => {
//     try {
//       const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
//       const borrowers = await Borrow.find({
//         dueDate: {
//           $lt: oneDayAgo,
//         },
//         returnDate: null,
//         notified: false,
//       });

//       for (const element of borrowers) {
//         if (element.user && element.user.email) {
//           const user = await User.findById(element.user.id);
//           sendEmail({
//             email: element.user.email,
//             subject: "Book Return Reminder",
//             message: `Hello ${element.user.name}, \n\nThis is a reminder that the book you borrowed is due for return today. Please return it to the library as soon as possible.\n\nThank you!`,
//           });
//           element.notified = true;
//           await element.save();
//           console.log(`Email sent to ${element.user.email} `);
//         }
//       }
//     } catch (error) {
//       console.error("Some error occured while notifying users:", error);
//     }
//   });
// };

// // 6:01:00    6:17:23
// PORT=4000

// FRONTEND_URL=http://localhost:5173

// MONGO_URI=mongodb://127.0.0.1:27017

// SMTP_HOST=smtp.gmail.com

// SMTP_SERVICE = gmail

// SMTP_PORT=465

// SMTP_MAIL=akashdwivedi9589@gmail.com

// SMTP_PASSWORD=svmy vqym ujku ulem
