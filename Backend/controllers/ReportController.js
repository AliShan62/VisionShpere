const Employee = require('../models/Employee'); // Import the Employee model
const Report = require('../models/Report'); // Import the Report model
const Attendance = require('../models/Attendance'); // The working hours report model
const WorkingHoursReport = require('../models/Working_hours');
const DailyHistoryReport = require('../models/DailyHistoryReport');
const LocationHistory = require('../models/LocationHistory');


// Controller function to generate "My Employees" report
const generateMyEmployeesReport = async (req, res) => {
    try {
      const { branchSelection } = req.query; // Get branch selection from query parameters
  
      // Validate branch selection
      const validBranches = ['All', 'Main'];
      if (branchSelection && (!validBranches.includes(branchSelection) && branchSelection.trim() === '')) {
        return res.status(400).json({ 
          message: 'Please provide a valid branch selection (All, Main, or branch name)' 
        });
      }
  
      // Set up query based on branch selection
      let query = {};
  
      // If branchSelection is provided, apply filter based on it
      if (branchSelection && branchSelection !== 'All') {
        query = { branch: branchSelection };
      }
  
      // Fetch employees based on query
      const employees = await Employee.find(query, 'firstName lastName phoneNumber createdAt');
  
      // If no employees are found, return an error
      if (employees.length === 0) {
        return res.status(404).json({ message: 'No employees found for the selected criteria' });
      }
  
      // Create the report with employee data
      const newReport = new Report({
        reportType: 'My Employees',
        reportData: employees.map(employee => ({
          firstName: employee.firstName,
          lastName: employee.lastName,
          phoneNumber: employee.phoneNumber,
          dateAdded: employee.createdAt, // Show the creation date of the employee
        })),
        startDate: new Date(), // Current date as start date
        endDate: new Date(), // Current date as end date
      });
  
      // Save the report to the database
      await newReport.save();
  
      // Return success response with generated report
      return res.status(201).json({
        message: 'My Employees Report generated successfully!',
        report: newReport,
      });
    } catch (error) {
      // Log and return a server error response
      console.error('Error generating My Employees report:', error);
      return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  };

// const generateWorkingHoursReport = async (req, res) => {
//   try {
//     const { branchSelection, employeeSelection, startDate, endDate } = req.query;

//     console.log(branchSelection, employeeSelection, startDate, endDate )
//     let query = {};

//     // Apply branch filter
//     if (branchSelection && branchSelection !== 'All') {
//       query.branch = branchSelection;
//     }

//     // Apply employee filter
//     if (employeeSelection && employeeSelection !== 'All') {
//       query._id = employeeSelection;  // Assuming employeeSelection is the employee ID
//     }

//     // Apply date range filter
//     if (startDate && endDate) {
//       query.dateAdded = { $gte: new Date(startDate), $lte: new Date(endDate) };
//     }

//     // Fetch the working hours data based on query filters
//     const workingHoursData = await Employee.find(query, 'firstName lastName totalHours');

//     console.log(workingHoursData)
//     if (workingHoursData.length === 0) {
//       return res.status(404).json({ message: 'No employees found for the selected criteria' });
//     }

//     // Create a report with the filtered working hours data
//     const report = new WorkingHoursReport({
//       reportType: 'Working Hours Report',
//       reportData: workingHoursData,
//       startDate: new Date(startDate),
//       endDate: new Date(endDate)
//     });

//     // Save the report to the database
//     await report.save();

//     // Send the generated report in the response
//     return res.status(201).json({
//       message: 'Working Hours Report generated successfully!',
//       report: report
//     });
//   } catch (error) {
//     console.error('Error generating working hours report:', error);
//     return res.status(500).json({ message: 'Server error. Please try again later.' });
//   }
// };

// Export report to Excel

// const generateWorkingHoursReport = async (req, res) => {
//     try {
//       const { branchSelection, employeeSelection, startDate, endDate } = req.query;
  
//       // Initialize a query object for filtering
//       let query = {};
  
//       // Apply branch filter
//       if (branchSelection && branchSelection !== 'All') {
//         query.branch = branchSelection;
//       }
  
//       // Apply employee filter
//       if (employeeSelection && employeeSelection !== 'All') {
//         query.employeeId = employeeSelection; // Assuming employeeId is used in Attendance schema
//       }
  
//       // Apply date range filter
//       if (startDate && endDate) {
//         query.date = {
//           $gte: new Date(startDate).toISOString().split('T')[0],
//           $lte: new Date(endDate).toISOString().split('T')[0],
//         };
//       }
  
//       // Fetch attendance records based on filters
//       const attendanceRecords = await Attendance.find(query, {
//         firstName: 1,
//         lastName: 1,
//         branch: 1,
//         totalHours: 1,
//         date: 1,
//         _id: 0, // Exclude the default MongoDB ID
//       });
  
//       // Check if attendance records exist
//       if (!attendanceRecords.length) {
//         return res.status(404).json({
//           message: 'No attendance records found for the selected criteria.',
//         });
//       }
  
//       // Prepare data for WorkingHoursReport
//       const reportData = attendanceRecords.map((record) => ({
//         firstName: record.firstName,
//         lastName: record.lastName,
//         hoursOfWork: record.totalHours || 0, // Handle cases where totalHours might be undefined
//         branch: record.branch || 'Not Assigned',
//         dateAdded: record.date,
//       }));
  
//       // Create a new WorkingHoursReport document
//       const report = new WorkingHoursReport({
//         reportType: 'Working Hours Report',
//         reportData,
//         startDate: new Date(startDate),
//         endDate: new Date(endDate),
//       });
  
//       // Save the report in the database
//       await report.save();
  
//       // Respond with the generated report
//       return res.status(201).json({
//         message: 'Working Hours Report generated successfully!',
//         report,
//       });
//     } catch (error) {
//       console.error('Error generating working hours report:', error);
//       res.status(500).json({
//         message: 'Server error. Please try again later.',
//       });
//     }
//   };
  

// const generateWorkingHoursReport = async (req, res) => {
//     try {
//       const { branchSelection, employeeSelection, startDate, endDate } = req.query;
  
//       // Initialize a query object for filtering
//       let query = {};
  
//       // Apply branch filter
//       if (branchSelection && branchSelection !== 'All') {
//         query.branch = branchSelection;
//       }
  
//       // Apply employee filter
//       if (employeeSelection && employeeSelection !== 'All') {
//         query.employeeId = employeeSelection; // Assuming employeeId is used in Attendance schema
//       }
  
//       // Convert startDate and endDate to full ISO format before applying to query
//       if (startDate && endDate) {
//         // Convert to full ISO format with time at midnight
//         const start = new Date(startDate);
//         const end = new Date(endDate);
  
//         // Ensure the dates are in the correct ISO format (with time)
//         const startISO = new Date(start.setHours(0, 0, 0, 0)).toISOString(); // Set time to midnight
//         const endISO = new Date(end.setHours(23, 59, 59, 999)).toISOString(); // Set time to end of day
  
//         query.date = {
//           $gte: startISO, // Greater than or equal to start date
//           $lte: endISO,   // Less than or equal to end date
//         };
//       }
  
//       // Fetch attendance records based on filters
//       const attendanceRecords = await Attendance.find(query, {
//         firstName: 1,
//         lastName: 1,
//         branch: 1,
//         totalHours: 1,
//         date: 1,
//         _id: 0, // Exclude the default MongoDB ID
//       });
  
//       // Check if attendance records exist
//       if (!attendanceRecords.length) {
//         return res.status(404).json({
//           message: 'No attendance records found for the selected criteria.',
//         });
//       }
  
//       // Prepare data for WorkingHoursReport
//       const reportData = attendanceRecords.map((record) => ({
//         firstName: record.firstName,
//         lastName: record.lastName,
//         hoursOfWork: record.totalHours || 0, // Handle cases where totalHours might be undefined
//         branch: record.branch || 'Not Assigned',
//         dateAdded: record.date,
//       }));
  
//       // Create a new WorkingHoursReport document
//       const report = new WorkingHoursReport({
//         reportType: 'Working Hours Report',
//         reportData,
//         startDate: new Date(startDate),
//         endDate: new Date(endDate),
//       });
  
//       // Save the report in the database
//       await report.save();
  
//       // Respond with the generated report
//       return res.status(201).json({
//         message: 'Working Hours Report generated successfully!',
//         report,
//       });
//     } catch (error) {
//       console.error('Error generating working hours report:', error);
//       res.status(500).json({
//         message: 'Server error. Please try again later.',
//       });
//     }
//   };    


const generateWorkingHoursReport = async (req, res) => {
    try {
      const { branchSelection, employeeSelection, startDate, endDate } = req.query;
  
      // Initialize a query object for filtering
      let query = {};
  
      // Apply branch filter with case-insensitive comparison
      if (branchSelection && branchSelection !== 'All') {
        // Normalize the branch name (e.g., lowercase)
        query.branch = { $regex: new RegExp(`^${branchSelection.trim()}$`, 'i') }; // 'i' for case-insensitive search
      }
  
      // Apply employee filter if provided
      if (employeeSelection && employeeSelection !== 'All') {
        query.employeeId = employeeSelection; // Assuming employeeId is used in Attendance schema
      }
  
      // Validate and convert startDate and endDate to ISO format before applying to the query
      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
  
        // Ensure the dates are in correct ISO format with the time adjusted
        const startISO = new Date(start.setHours(0, 0, 0, 0)).toISOString(); // Midnight
        const endISO = new Date(end.setHours(23, 59, 59, 999)).toISOString(); // End of the day
  
        query.date = {
          $gte: startISO, // Greater than or equal to start date
          $lte: endISO,   // Less than or equal to end date
        };
      }
  
      // Fetch attendance records based on filters
      const attendanceRecords = await Attendance.find(query, {
        firstName: 1,
        lastName: 1,
        branch: 1,
        totalHours: 1,
        date: 1,
        _id: 0, // Exclude the default MongoDB ID
      });
  
      // Check if attendance records exist
      if (!attendanceRecords.length) {
        return res.status(404).json({
          message: 'No attendance records found for the selected criteria.',
        });
      }
  
      // Prepare data for the WorkingHoursReport
      const reportData = attendanceRecords.map((record) => ({
        firstName: record.firstName,
        lastName: record.lastName,
        hoursOfWork: record.totalHours || 0, // Handle cases where totalHours might be undefined
        branch: record.branch || 'Not Assigned',
        dateAdded: record.date,
      }));
  
      // Create a new WorkingHoursReport document
      const report = new WorkingHoursReport({
        reportType: 'Working Hours Report',
        reportData,
        startDate: new Date(startDate), // Current report start date
        endDate: new Date(endDate), // Current report end date
      });
  
      // Save the report to the database
      await report.save();
  
      // Respond with the generated report
      return res.status(201).json({
        message: 'Working Hours Report generated successfully!',
        report,
      });
    } catch (error) {
      console.error('Error generating working hours report:', error);
      res.status(500).json({
        message: 'Server error. Please try again later.',
      });
    }
  };
  


const generateDailyHistoryReport = async (req, res) => {
  const { branch, date, trackingMethod } = req.query;

  // Build the query for fetching attendance records based on branch and date
  let query = { date };

  // Apply branch filter if provided
  if (branch && branch !== 'All') {
    query.branch = branch;
  }

  // Check if trackingMethod is provided and apply logic based on it (if needed)
  // Here, we'll just use the trackingMethod as part of the query if required, for now assuming it's not filtered in this example.

  try {
    // Fetch attendance records for the provided branch and date
    const attendanceRecords = await Attendance.find(query).populate('employeeId');

    if (attendanceRecords.length === 0) {
      return res.status(404).json({ message: 'No attendance records found for the selected criteria.' });
    }

    // Transform the attendance data to match the report format
    const reportData = attendanceRecords.map(attendance => ({
      employeeId: attendance.employeeId._id,
      name: `${attendance.employeeId.firstName} ${attendance.employeeId.lastName}`,
      started: attendance.checkIn,
      finished: attendance.checkOut,
      locationIn: attendance.branch,
      locationOut: attendance.branch,
      spent: attendance.totalHours,
    }));

    // Create and save the daily history report
    const dailyReport = new DailyHistoryReport({
      branch,
      date,
      reportData,
    });

    await dailyReport.save();

    // Send success response
    res.status(200).json({
      message: 'Daily History Report generated and saved successfully!',
      reportData: dailyReport.reportData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating the daily history report.' });
  }
};

const generateLocationHistoryReport = async (req, res) => {
  try {
    const { branchSelection, employeeSelection, startDate, endDate } = req.query;

    // Calculate and format report period
    let reportPeriod = "Not specified"; // Default value
    if (startDate && endDate) {
      const start = new Date(startDate).toLocaleDateString(); // Format: MM/DD/YYYY
      const end = new Date(endDate).toLocaleDateString();     // Format: MM/DD/YYYY
      reportPeriod = `${start} to ${end}`; // Example: 11/01/2024 to 11/21/2024
    }

    // Initialize a query object for filtering
    let query = {};

    // Apply branch filter
    if (branchSelection && branchSelection !== 'All') {
      query.branch = { $regex: new RegExp(`^${branchSelection.trim()}$`, 'i') };
    }

    // Apply employee filter
    if (employeeSelection && employeeSelection !== 'All') {
      query.employeeId = employeeSelection;
    }

    // Apply date filter
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      query.date = {
        $gte: new Date(start.setHours(0, 0, 0, 0)).toISOString(),
        $lte: new Date(end.setHours(23, 59, 59, 999)).toISOString(),
      };
    }

    // Fetch attendance records
    const attendanceRecords = await Attendance.find(query);

    if (!attendanceRecords.length) {
      return res.status(404).json({
        message: 'No attendance records found for the selected criteria.',
        reportPeriod, // Include reportPeriod in the response
      });
    }

    // Process attendance records
    const locationHistoryData = attendanceRecords.map((record) => {
      // Default coordinates for locations (same for both start and end)
      const startEndLocationCoordinates = { latitude: 40.7128, longitude: -74.0060 }; // Static coordinates

      const checkInTime = new Date(record.checkIn);
      const checkOutTime = new Date(record.checkOut);
      const durationInMinutes = (checkOutTime - checkInTime) / 60000; // Milliseconds to minutes

      // Ensure valid location information
      const [startLocation] = (record.branch || 'Unknown').split('-'); // Only use start location for both start and end

      return {
        employeeId: record.employeeId,
        employeeName: `${record.firstName} ${record.lastName}`,
        startLocation: {
          area: startLocation,
          latitude: startEndLocationCoordinates.latitude,
          longitude: startEndLocationCoordinates.longitude,
        },
        endLocation: {
          area: startLocation,  // Same as startLocation for indoor tracking
          latitude: startEndLocationCoordinates.latitude,
          longitude: startEndLocationCoordinates.longitude,
        },
        startTime: checkInTime,
        endTime: checkOutTime,
        durationInMinutes,
        distanceKm: calculateDistance(startEndLocationCoordinates, startEndLocationCoordinates), // Distance is 0 for indoor tracking
        date: record.date,
        reportPeriod, // Add reportPeriod here
      };
    });

    // Save location history data to the database
    await LocationHistory.insertMany(locationHistoryData);

    return res.status(201).json({
      message: 'Location History Report generated successfully!',
      locationHistoryData,
      reportPeriod, // Send report period in the response
    });
  } catch (error) {
    console.error('Error generating location history report:', error);
    res.status(500).json({
      message: 'Server error. Please try again later.',
    });
  }
};




const calculateDistance = (coord1, coord2) => {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;

  const R = 6371; // Radius of the Earth in kilometers

  const lat1 = coord1.latitude;
  const lon1 = coord1.longitude;
  const lat2 = coord2.latitude;
  const lon2 = coord2.longitude;

  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(deltaLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers
  return distance.toFixed(2); // Return distance rounded to two decimal places
};


const exportToExcel = async (req, res) => {
  try {
    const { reportId } = req.params;

    const report = await WorkingHoursReport.findById(reportId);

    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet('Working Hours Report');

    worksheet.columns = [
      { header: 'First Name', key: 'firstName', width: 15 },
      { header: 'Last Name', key: 'lastName', width: 15 },
      { header: 'Hours of Work', key: 'hoursOfWork', width: 15 },
      { header: 'Branch', key: 'branch', width: 15 },
      { header: 'Date Added', key: 'dateAdded', width: 20 }
    ];

    report.reportData.forEach(data => {
      worksheet.addRow(data);
    });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=working_hours_report_${report._id}.xlsx`);

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting to Excel:', error);
    return res.status(500).json({ message: 'Error exporting to Excel' });
  }
};

// Export report to PDF
const exportToPDF = async (req, res) => {
  try {
    const { reportId } = req.params;

    const report = await WorkingHoursReport.findById(reportId);

    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }

    const html = `
      <h1>Working Hours Report</h1>
      <p><strong>Start Date:</strong> ${report.startDate}</p>
      <p><strong>End Date:</strong> ${report.endDate}</p>
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Hours of Work</th>
            <th>Branch</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          ${report.reportData.map(data => `
            <tr>
              <td>${data.firstName}</td>
              <td>${data.lastName}</td>
              <td>${data.hoursOfWork}</td>
              <td>${data.branch}</td>
              <td>${data.dateAdded}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;

    pdf.create(html).toStream((err, stream) => {
      if (err) {
        return res.status(500).json({ message: 'Error generating PDF' });
      }
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=working_hours_report_${report._id}.pdf`);
      stream.pipe(res);
    });
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    return res.status(500).json({ message: 'Error exporting to PDF' });
  }
};




  
  
  module.exports = { 
    generateMyEmployeesReport ,
    generateWorkingHoursReport,
    generateDailyHistoryReport,
    generateLocationHistoryReport,
    exportToExcel,
    exportToPDF
};
  

