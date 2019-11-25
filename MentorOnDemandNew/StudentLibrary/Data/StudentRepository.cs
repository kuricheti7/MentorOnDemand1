using StudentLibrary.Dtos;
using StudentLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace StudentLibrary.Data
{
    public class StudentRepository : IStudentRepository
    {
        StudentDBContext context;
        public StudentRepository(StudentDBContext context)
        {
            this.context = context;
        }

        public bool AddPayment(Payments payments)
        {
            try
            {
                context.Payments.Add(payments);
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

        public bool ApplyTraining(int id, ApplyTrainingDto applyTraining)
        {
            try
            {
                var train = context.Trainings.Find(applyTraining.trainingId);
                train.Id = applyTraining.trainingId;
                train.userId = applyTraining.UserId;
                train.userFirstName = applyTraining.UserFirstName;
                train.userLastName = applyTraining.UserLastName;
                train.Progress = applyTraining.Progress;
                train.PaymentStatus = applyTraining.PaymentStatus;

                context.Trainings.Update(train);
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

        public List<Trainings> GetSCompletedTrainings(string id)
        {
            var completed = from a in context.Trainings
                            join
                            ua in context.MODUsers on a.userId equals ua.Id
                            where a.Progress == 100 && a.userId == id
                            select a;

            return completed.ToList();
        }

        public List<Trainings> GetSOngoingTrainings(string id)
        {
            var ongoing = from a in context.Trainings
                          join
      ua in context.MODUsers on a.userId equals ua.Id
                          where a.Progress > 0 && a.Progress < 100 && a.userId == id
                          select a;
            return ongoing.ToList();
        }

        public MODUser GetStudent(string id)
        {
            return this.context.MODUsers.Find(id);
        }

        public List<Trainings> GetSUpcomingTrainings()
        {
            var upcoming = from a in context.Trainings
                           where a.Progress == 0
                           select a;

            return upcoming.ToList();
        }

        public Trainings GetTrainingById(int id)
        {
            return context.Trainings.Find(id);
        }

        public List<Trainings> GetTrainings()
        {
            return context.Trainings.ToList();
        }

        public List<Payments> GetPayments()
        {
            return context.Payments.ToList();
        }
        public bool UpdateStudent(MODUser student)
        {
            try
            {
                var user = context.MODUsers.Find(student.Id);
                user.FirstName = student.FirstName;
                user.LastName = student.LastName;
                user.Email = student.Email;
                user.Gender = student.Gender;
                user.DateOfBirth = student.DateOfBirth;

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
    }
}
