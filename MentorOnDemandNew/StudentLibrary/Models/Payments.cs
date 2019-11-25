using System;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary.Models
{
    public class Payments
    {
        public int Id { get; set; }
        public string userId { get; set; }
        public string mentorId { get; set; }
        public int courseId { get; set; }
        public double Fee { get; set; }
        public double commission { get; set; }
        public string courseName { get; set; }
        public bool paymentStatus { get; set; }
        public int trainingDetailsId { get; set; }
    }
}
