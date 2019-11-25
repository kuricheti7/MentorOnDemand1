using StudentLibrary.Dtos;
using StudentLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentLibrary.Data
{
    public interface IStudentRepository
    {
        public bool UpdateStudent(MODUser student);
        MODUser GetStudent(string id);
        public List<Trainings> GetTrainings();

        public List<Payments> GetPayments();
        public Trainings GetTrainingById(int id);

        public List<Trainings> GetSUpcomingTrainings();
        public List<Trainings> GetSOngoingTrainings(string id);
        public List<Trainings> GetSCompletedTrainings(string id);

        public bool ApplyTraining(int id, ApplyTrainingDto applyTraining);

        public bool AddPayment(Payments payments);
    }
}
