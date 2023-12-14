using MongoDB.Bson;

namespace WebApplication1.Models
{
    public class Workout
    {
        public string Id { get; set; }

        public string WorkoutSegment { get; set; }

        public List<string> Workouts { get; set; }
    }
}
