const Attendance = require('../models/Attendance');
const Employee = require('../models/Employee');


const checkInController = async (req, res) => {
    try {
        const { employeeId } = req.body;

        // Find existing attendance for the employee on the same day
        let attendance = await Attendance.findOne({
            employeeId,
            date: new Date().toISOString().split('T')[0],  // Match only the date part
        });

        if (attendance) {
            // Fetch employee details for the response
            const employee = await Employee.findById(employeeId);

            return res.json({
                message: 'Already checked in for today.',
                status: 'Success',
                employee,  // Include employee details
            });
        }

        // If no check-in record, create a new one
        attendance = new Attendance({
            employeeId,
            checkIn: new Date(),
            status: 'Success',
            date: new Date().toISOString().split('T')[0],  // Store only the date part
        });

        await attendance.save();

        // Fetch employee details for the response
        const employee = await Employee.findById(employeeId);

        res.json({
            message: 'Check-in successful',
            status: 'Success',
            attendance,
            employee,  // Include employee details
        });
    } catch (error) {
        // Log detailed error for development
        console.error("Check-In Error:", error);

        res.status(500).json({
            message: 'An error occurred during check-in.',
            success: false,
        });
    }
};


const checkOutController = async (req, res) => {
    try {
        const { employeeId } = req.body;

        // Find today's check-in record
        const attendance = await Attendance.findOne({
            employeeId,
            date: new Date().toISOString().split('T')[0],  // Match only the date part
        });

        // If no check-in record is found, respond with a message
        if (!attendance || !attendance.checkIn) {
            return res.status(400).json({
                message: 'No check-in record found for today.',
                status: 'Pending',
            });
        }

        // If the employee has already checked out, respond with a message
        if (attendance.checkOut !== 'Pending') {
            return res.status(400).json({
                message: 'Already checked out for today.',
                status: 'Success',
            });
        }

        // Update check-out time and calculate total hours worked
        attendance.checkOut = new Date();
        const hoursWorked = (attendance.checkOut - attendance.checkIn) / (1000 * 60 * 60);  // Convert milliseconds to hours
        attendance.totalHours = hoursWorked;
        attendance.status = 'Success'; // Update the status after check-out

        // Save the updated attendance record to the database
        await attendance.save();

        // Fetch employee details for the response
        const employee = await Employee.findById(employeeId);
        // Send a successful response with the updated attendance record
        res.status(200).json({
            message: 'Check-out successful',
            status: 'Success',
            attendance,
            employee
        });
    } catch (error) {
        // Log detailed error for development
        console.error("Check-Out Error:", error);

        // Return a 500 status code if an error occurs
        res.status(500).json({
            message: 'An error occurred during check-out.',
            success: false,
        });
    }
};



const getAttendanceRecordsController = async (req, res) => {
    try {
        const { employeeId } = req.params;

        // Fetch attendance records for the employee
        const attendanceRecords = await Attendance.find({ employeeId });
         // Fetch employee details for the response
        const employee = await Employee.findById(employeeId);
         
        if (!attendanceRecords || attendanceRecords.length === 0) {
            return res.status(404).json({
                message: 'No attendance records found for this employee.',
                success: false,
            });
        }

        res.status(200).json({
            message: 'Attendance records fetched successfully',
            success: true,
            attendanceRecords,
            employee
        });
    } catch (error) {
        // Log detailed error for development
        console.error("Get Attendance Error:", error);

        res.status(500).json({
            message: 'An error occurred while fetching attendance records.',
            success: false,
        });
    }
};



module.exports = { 
    checkInController,
    checkOutController,
     getAttendanceRecordsController
    };