const mongoose = require('mongoose');

const SalaryReportSchema = new mongoose.Schema({
  generatedBy: { 
    type: String, 
    required: [true, 'Generated by field is required.'], 
    trim: true 
  }, // User generating the report
  
  filters: {
    branch: { 
      type: String, 
      required: [true, 'Branch filter is required.'], 
      trim: true 
    },
    startDate: { 
      type: Date, 
      required: [true, 'Start date is required.'] 
    },
    endDate: { 
      type: Date, 
      required: [true, 'End date is required.'] 
    },
    employeeId: { 
      type: String, 
      default: "All" 
    },
  },
  
  generatedAt: { 
    type: Date, 
    default: Date.now 
  }, // Timestamp for when the report was generated
  
  reportData: { 
    type: [
      {
        employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
        name: { type: String, required: true, trim: true },
        branch: { type: String, required: true, trim: true },
        totalHours: { type: Number, required: true, min: 0 },
        overtime: { type: Number, required: true, min: 0 },
        totalSalary: { type: Number, required: true, min: 0 },
        salaryBased: { type: Boolean, required: true },
      }
    ], 
    required: [true, 'Report data is required.'], 
    validate: {
      validator: function (v) {
        return Array.isArray(v) && v.length > 0; // Ensure there is at least one employee's data
      },
      message: 'Report data must include at least one employee entry.'
    }
  },
});

module.exports = mongoose.model('SalaryReport', SalaryReportSchema);