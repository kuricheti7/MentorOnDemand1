using System;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary.Dtos
{
    public class ApplyTrainingDto
    {
        public int trainingId { get; set; }
        public string UserId { get; set; }
        public string UserFirstName { get; set; }
        public string UserLastName { get; set; }
        public int Progress { get; set; }
        public bool PaymentStatus { get; set; }
    }
}
