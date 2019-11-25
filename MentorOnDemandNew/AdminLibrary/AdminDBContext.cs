using AdminLibrary.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdminLibrary
{
    public class AdminDBContext : IdentityDbContext
    {
        public AdminDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Course> Skill { get; set; }
        public DbSet<MODUser> MODUsers { get; set; }
    }
}
