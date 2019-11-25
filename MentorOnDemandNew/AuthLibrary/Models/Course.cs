using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AuthLibrary.Models
{
    public class Course
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string CourseName { get; set; }
        public string CourseDesc { get; set; }
        [Required]
        public Timings CTimings { get; set; }
        [Required]
        public int Fee { get; set; }
    }
}
