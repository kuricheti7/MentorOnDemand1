using AdminLibrary.Dtos;
using AdminLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdminLibrary.Data
{
    public interface IAdminRepository
    {
        public bool AddCourse(CourseDto courseDto);
        public bool UpdateCourse(Course course);
        Course GetCourse(int id);
        Course GetCoursebyName(string name);
        public IEnumerable<CourseListDto> GetCourses();

        public IEnumerable<MODUser> GetStudents();

        public IEnumerable<MODUser> GetMentors();

        public bool DeleteCourse(Course course);
        bool BlockUser(string id);
    }
}
