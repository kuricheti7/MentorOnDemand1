using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AuthLibrary.Models
{
    public class MODUser : IdentityUser
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        public int YearsOfExp { get; set; }
        public string LinkedInUrl { get; set; }
       
        public Gender Gender { get; set; }

        public bool IsActive { get; set; } = true;


    }
}
