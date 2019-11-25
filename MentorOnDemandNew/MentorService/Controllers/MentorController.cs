using MentorLibrary.Data;
using MentorLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MentorService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class MentorController : ControllerBase
    {
        IMentorRepository mentorrepository;
        public MentorController(IMentorRepository repository)
        {
            this.mentorrepository = repository;
        }
        // GET: api/Mentor


        // GET: api/Mentor/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            var stud = mentorrepository.GetMentor(id);
            if (stud == null)
            {
                return NotFound();
            }
            return Ok(stud);
        }

        [HttpGet("gettraining/{trid}")]
        public IActionResult Get(int trid)
        {
            var stud = mentorrepository.GetTrainingById(trid);
            if (stud == null)
            {
                return NotFound();
            }
            return Ok(stud);
        }

        [HttpGet("mentorongng/{trid}")]
        public IActionResult GetMOn(string trid)
        {
            var stud = mentorrepository.GetMOngoingTrainings(trid);
            if (!stud.Any())
            {
                return NotFound();
            }
            return Ok(stud);
        }

        [HttpGet("mentorupcom/{trid}")]
        public IActionResult GetMUp(string trid)
        {
            var stud = mentorrepository.GetMUpcomingTrainings(trid);
            if (!stud.Any())
            {
                return NotFound();
            }
            return Ok(stud);
        }
        [HttpGet("mentorcomp/{trid}")]
        public IActionResult GetMCom(string trid)
        {
            var stud = mentorrepository.GetMCompletedTrainings(trid);
            if (!stud.Any())
            {
                return NotFound();
            }
            return Ok(stud);
        }


        [HttpGet("gettrainings")]
        public IActionResult Get()
        {
            var stud = mentorrepository.GetTrainings();
            if (stud == null)
            {
                return NotFound();
            }
            return Ok(stud);
        }
        // POST: api/Mentor
        [Route("addtraining")]
        [HttpPost]
        public IActionResult Post([FromBody] Trainings trainings)
        {
            if (ModelState.IsValid)
            {
                bool result = mentorrepository.AddTraining(trainings);
                if (result)
                {
                    return Created("Add Training", trainings.Id);
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/Mentor/5
        [HttpPut("{id}")]
        public IActionResult Put(string id, [FromBody] MODUser user)
        {
            if (ModelState.IsValid && id == user.Id)
            {
                bool result = mentorrepository.UpdateMentor(user);
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
        public void Delete(int id)
        {
        }


        [HttpGet("updateProgress/{id}/{progressValue}")]
        public IActionResult Put(int id, int progressValue)
        {
            if (ModelState.IsValid)
            {
                bool result = mentorrepository.updateProgress(id, progressValue);
                if (result)
                {
                    return Ok();
                }
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
            return BadRequest(ModelState);



        }
    }
}
