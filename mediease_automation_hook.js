// ============================================================
//  MediEase – Appointment Automation Hook
//  Add this <script> block to your index.html
//  just before the closing </body> tag.
//
//  STEP: Replace APPS_SCRIPT_URL below with your
//        deployed Google Apps Script Web App URL.
// ============================================================

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbyzZrfdhVXnJLSkJfdXnJFusgxCx2mOLubTZ1bQcnf24f8HFlmqNhccHstavjETb9yQ/exec/exec";

/**
 * Call this function when the appointment is confirmed.
 * Pass the full appointment object as the argument.
 *
 * Example usage (inside your existing confirmation logic):
 *
 *   sendAppointmentData({
 *     bookingId    : "MED-001",
 *     firstName    : "Rahul",
 *     lastName     : "Sharma",
 *     age          : "32",
 *     gender       : "Male",
 *     phone        : "9876543210",
 *     email        : "rahul@email.com",
 *     bloodGroup   : "B+",
 *     hospital     : "AIIMS Rishikesh",
 *     doctor       : "Dr. Priya Mehta",
 *     specialization: "Cardiologist",
 *     concern      : "Chest pain and shortness of breath",
 *     date         : "2026-04-05",
 *     timeSlot     : "10:30 AM"
 *   });
 */
async function sendAppointmentData(appointmentObj) {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",           // Required for Apps Script cross-origin
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentObj)
    });
    console.log("✅ Appointment data sent to automation.");
  } catch (err) {
    console.error("❌ Failed to send appointment data:", err);
  }
}

// ============================================================
//  HOW TO INTEGRATE INTO YOUR EXISTING CONFIRMATION STEP
//  ============================================================
//
//  Find the part in your JS where you show the
//  "🎉 Appointment Confirmed!" screen. It likely looks like:
//
//    showStep(5);   or   confirmSection.classList.add('active');
//
//  Right before or after that line, add:
//
//    sendAppointmentData({
//      bookingId     : generateBookingId(),   // or however you make IDs
//      firstName     : patientData.firstName,
//      lastName      : patientData.lastName,
//      age           : patientData.age,
//      gender        : patientData.gender,
//      phone         : patientData.phone,
//      email         : patientData.email     || "",
//      bloodGroup    : patientData.bloodGroup || "",
//      hospital      : selectedHospital.name,
//      doctor        : selectedDoctor.name,
//      specialization: selectedDoctor.specialization,
//      concern       : patientData.concern,
//      date          : selectedDate,
//      timeSlot      : selectedSlot
//    });
//
// ============================================================
