using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminLibrary.Data;
using AdminLibrary.Dtos;
using AdminLibrary.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdminService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AdminController : ControllerBase
    {
        IAdminRepository repository;
        public AdminController(IAdminRepository repository)
        {
            this.repository = repository;
        }
        // GET: api/Admin
        [Route("coursename/{name}")]
        [HttpGet]
        public IActionResult GetCoursebyName(string name)
        {
            var courses = repository.GetCoursebyName(name);
            if (courses == null)
            {
                return NoContent();
            }
            return Ok(courses);
        }

        [Route("courselist")]
        [HttpGet]
        public IActionResult GetCourses()
        {
            var courses = repository.GetCourses();
            if (!courses.Any())
            {
                return NoContent();
            }
            return Ok(courses);
        }


        [Route("mentorlist")]
        [HttpGet]
        public IActionResult GetMentors()
        {
            var mentors = repository.GetMentors();
            if (!mentors.Any())
            {
                return NoContent();
            }
            return Ok(mentors);
        }


        [Route("studentlist")]
        [HttpGet]
        public IActionResult GetStudents()
        {
            var stud = repository.GetStudents();
            if (!stud.Any())
            {
                return NoContent();
            }
            return Ok(stud);
        }

        // GET: api/Admin/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var movie = repository.GetCourse(id);
            if (movie == null)
            {
                return NotFound();
            }
            return Ok(movie);
        }

        // POST: api/Admin
        [Route("addcourse")]
        [HttpPost]

        public IActionResult Post([FromBody] CourseDto course)
        {
            if (ModelState.IsValid)
            {
                bool result = repository.AddCourse(course);
                if (result)
                {
                    return Created("AddCourse", course.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Admin/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Course course)
        {
            if (ModelState.IsValid && id == course.Id)
            {
                bool result = repository.UpdateCourse(course);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }



        // DELETE: api/ApiWithActions/5
        [HttpDelete("deletecourse/{id}", Name = "DeleteCourse")]
        public IActionResult Delete(int id)
        {
            var skill = repository.GetCourse(id);
            if (skill == null)
            {
                return NotFound();
            }
            bool result = repository.DeleteCourse(skill);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }


        [HttpGet("blockunblock/{id}")]
        public IActionResult GetBlockUnblock(string id)
        {
            var result = repository.BlockUser(id);
            if (result)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}
