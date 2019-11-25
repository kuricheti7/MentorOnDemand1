using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using StudentLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary
{
    public class StudentDBContext : IdentityDbContext
    {
        public StudentDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<MODUser> MODUsers { get; set; }

        

        public DbSet<Trainings> Trainings { get; set; }

        public DbSet<Payments> Payments { get; set; }
    }
}
