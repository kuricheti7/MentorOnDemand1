using MentorLibrary.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace MentorLibrary
{
    public class MentorDBContext : IdentityDbContext
    {
        public MentorDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<MODUser> MODUsers { get; set; }

        public DbSet<Trainings> Trainings { get; set; }
    }
}
