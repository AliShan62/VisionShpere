const express = require('express');
const { generateMyEmployeesReport,generateWorkingHoursReport,generateDailyHistoryReport ,generateLocationHistoryReport} = require('../controllers/ReportController'); // Import the controller
const router = express.Router();

// Route to generate "My Employees" report with query parameters for branch selection
router.get('/generate-my-employees-report', generateMyEmployeesReport);

// Route to generate "My Employees" report with query parameters for branch selection
router.get('/working-hours', generateWorkingHoursReport);

router.get('/daily-history-report', generateDailyHistoryReport);


router.get('/location-history-report', generateLocationHistoryReport);
module.exports = router;