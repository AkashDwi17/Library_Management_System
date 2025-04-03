import express from "express";
import { 
    borrowedBooks, 
    getBorrowedBooksForAdmin,
    recordBorrowedBook,
    returnBorrowBook
} from "../controllers/borrowControllers.js";
import { isAuthenticated, isAuthorized } from "../middlewares/authMiddleware.js";

const router = express.Router();
const Admin = "Admin";  // FIX: Defined Admin before using it

router.post(
    "/record-borrow-book/:id", 
    isAuthenticated, 
    isAuthorized(Admin), 
    recordBorrowedBook
);

router.get(
    "/borrowed-books-by-users",
    isAuthenticated,
    isAuthorized(Admin),
    getBorrowedBooksForAdmin
);

router.get("/my-borrowed-books", isAuthenticated, borrowedBooks);

router.put(
    "/return-borrowed-book/:bookId",
    isAuthenticated,
    isAuthorized(Admin),
    returnBorrowBook 
);

export default router;  // FIXED: Default export to match the import in app.js
//41
// import express from "express";
// import { 
//     borrowedBooks, 
//     getBorrowedBooksForAdmin,
//     recordBorrowedBook,
//     returnBorrowBook,
// } from "../controllers/borrowControllers.js";
// import {
//     isAuthenticated,
//     isAuthorized,
// } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// router.post(
//     "/record-borrow-book/:id", 
//     isAuthenticated, 
//     isAuthorized(Admin), 
//     recordBorrowedBook
// );

// router.get(
//     "/borrowed-books-by-users",
//     isAuthenticated,
//     isAuthorized(Admin),
//     getBorrowedBooksForAdmin
// );

// router.get("/my-borrowed-books", isAuthenticated, borrowedBooks);

// router.put(
//     "/return-borrowed-book/:bookId",
//     isAuthenticated,
//     isAuthorized("Admin"),
//     returnBorrowBook 
// );

// // export const borrowRouter = router;

// export default router;  // Default export
