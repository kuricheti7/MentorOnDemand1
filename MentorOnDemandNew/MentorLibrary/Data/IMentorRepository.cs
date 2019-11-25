using MentorLibrary.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace MentorLibrary.Data
{
    public interface IMentorRepository
    {
        public bool UpdateMentor(MODUser mentor);
        MODUser GetMentor(string id);
        public bool AddTraining(Trainings trainings);
        public List<Trainings> GetTrainings();
        public Trainings GetTrainingById(int id);

        public List<Trainings> GetMUpcomingTrainings(string id);
        public List<Trainings> GetMOngoingTrainings(string id);
        public List<Trainings> GetMCompletedTrainings(string id);

        public bool updateProgress(int id, int progressValue);
    }
}
