using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentLibrary.Data;
using StudentLibrary.Dtos;
using StudentLibrary.Models;

namespace StudentService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class StudentController : ControllerBase
    {
        IStudentRepository studentrepository;
        public StudentController(IStudentRepository repository)
        {
            this.studentrepository = repository;
        }
        // GET: api/Student
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Student/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var stud = studentrepository.GetStudent(id);
            if (stud == null)
            {
                return NotFound();
            }
            return Ok(stud);
        }

        // POST: api/Student
        [Route("applytraining")]
        [HttpPut]
        public IActionResult Post(int id, [FromBody] ApplyTrainingDto applied)
        {
            bool apply = studentrepository.ApplyTraining(id, applied);
            if (apply)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }

        [Route("addpayment")]
        [HttpPost]
        public IActionResult Post([FromBody] Payments payments)
        {
            bool apply = studentrepository.AddPayment(payments);
            if (apply)
            {
                return Ok();
            }
            return StatusCode(StatusCodes.Status500InternalServerError);
        }

        // PUT: api/Student/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] MODUser user)
        {
            if (ModelState.IsValid && id == user.Id)
            {
                bool result = studentrepository.UpdateStudent(user);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
        }



        [HttpGet("gettraining/{trid}")]
        public IActionResult Get(int trid)
        {
            var stud = studentrepository.GetTrainingById(trid);
            if (stud == null)
            {
                return NotFound();
            }
            return Ok(stud);
        }

        [HttpGet("studongng/{trid}")]
        public IActionResult GetSOn(string trid)
        {
            var stud = studentrepository.GetSOngoingTrainings(trid);
            if (!stud.Any())
            {
                return NotFound();
            }
            return Ok(stud);
        }

        [HttpGet("traininglist")]
        public IActionResult GetTrainings()
        {
            var trainings = studentrepository.GetTrainings();
            if (!trainings.Any())
            {
                return NotFound();
            }
            return Ok(trainings);
        }

        [HttpGet("paymentlist")]
        public IActionResult GetPayments(string trid)
        {
            var payments = studentrepository.GetPayments();
            if (!payments.Any())
            {
                return NotFound();
            }
            return Ok(payments);
        }

        [HttpGet("studupcom")]
        public IActionResult GetSUp()
        {
            var stud = studentrepository.GetSUpcomingTrainings();
            if (!stud.Any())
            {
                return NotFound();
            }
            return Ok(stud);
        }
        [HttpGet("studcomp/{trid}")]
        public IActionResult GetSCom(string trid)
        {
            var stud = studentrepository.GetSCompletedTrainings(trid);
            if (!stud.Any())
            {
                return NotFound();
            }
            return Ok(stud);
        }
    }
}
