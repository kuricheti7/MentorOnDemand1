using MentorLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MentorLibrary.Data
{
    public class MentorRepository : IMentorRepository
    {
        MentorDBContext context;
        public MentorRepository(MentorDBContext context)
        {
            this.context = context;
        }

        public bool AddTraining(Trainings trainings)
        {
            try
            {
                context.Trainings.Add(trainings);
                var result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<Trainings> GetMCompletedTrainings(string id)
        {
            var completed = from a in context.Trainings
                            join ua in context.MODUsers on a.mentorId equals ua.Id
                            where a.Progress == 100 && a.mentorId == id
                            select a;

            return completed.ToList();
        }

        public MODUser GetMentor(string id)
        {
            return this.context.MODUsers.Find(id);
        }

        public List<Trainings> GetMOngoingTrainings(string id)
        {

            var ongoing = from a in context.Trainings
                          join
ua in context.MODUsers on a.mentorId equals ua.Id
                          where a.Progress > 0 && a.Progress < 100 && a.mentorId == id
                          select a;
            return ongoing.ToList();
        }

        public Trainings GetTrainingById(int id)
        {
            return context.Trainings.Find(id);
        }

        public List<Trainings> GetTrainings()
        {
            return this.context.Trainings.ToList();
        }

        public List<Trainings> GetMUpcomingTrainings(string id)
        {
            var upcoming = from a in context.Trainings
                           join
ua in context.MODUsers on a.mentorId equals ua.Id
                           where a.Progress == 0 && a.mentorId == id
                           select a;

            return upcoming.ToList();
        }

        public bool UpdateMentor(MODUser mentor)
        {
            try
            {
                var user = context.MODUsers.Find(mentor.Id);
                user.FirstName = mentor.FirstName;
                user.LastName = mentor.LastName;
                user.Email = mentor.Email;
                user.Gender = mentor.Gender;
                user.DateOfBirth = mentor.DateOfBirth;
                user.YearsOfExp = mentor.YearsOfExp;
                user.LinkedInUrl = mentor.LinkedInUrl;

                context.MODUsers.Update(user);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public bool updateProgress(int id, int progressValue)
        {
            try
            {
                var progressbyId = context.Trainings.Find(id);
                progressbyId.Progress = progressValue;
                if (progressValue == 100)
                {
                    progressbyId.Status = 2;
                }
                context.Trainings.Update(progressbyId);
                int result = context.SaveChanges();
                if (result > 0)
                {
                    return true;
                }
                return false;
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
