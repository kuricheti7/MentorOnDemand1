
using AuthLibrary.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace AuthLibrary
{
    public class AuthDBContext : IdentityDbContext
    {
        public AuthDBContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //builder.Entity<MovieActors>().HasKey(ma => new { ma.MovieId, ma.ActorId });
            builder.Entity<IdentityRole>(r => r.HasData(
                new IdentityRole { Id = "1", Name = "Admin", NormalizedName = "Admin" },
                new IdentityRole { Id = "2", Name = "Mentor", NormalizedName = "Mentor" },
                new IdentityRole { Id = "3", Name = "Student", NormalizedName = "Student" }
            ));
            base.OnModelCreating(builder);
        }
        public DbSet<MODUser> MODUsers { get; set; }

        public DbSet<Course> Skill { get; set; }

        public DbSet<Trainings> Trainings { get; set; }

        public DbSet<Payments> Payments { get; set; }
    
    }
}
