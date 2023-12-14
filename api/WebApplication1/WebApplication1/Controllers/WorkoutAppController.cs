using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Data;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutAppController : ControllerBase
    {
        private IConfiguration _configuration;

        public WorkoutAppController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetWorkout")]

        public JsonResult GetWorkout()
        {
            string connectionString = _configuration.GetConnectionString("onemorerepCon");
            var client = new MongoClient(connectionString);
            var database = client.GetDatabase("onemorerep");
            var collection = database.GetCollection<BsonDocument>("onemorerepapp");

            var filter = Builders<BsonDocument>.Filter.Empty;

            var documents = collection.Find(filter).ToList();

            var resultList = new List<Dictionary<string, object>>();


            foreach (var document in documents)
            {
                var resultDictionary = new Dictionary<string, object>();

                string? v = document["_id"].ToString();
                resultDictionary["id"] = v;
                resultDictionary["workoutSegment"] = document["workout-segment"].AsString;

                var workoutsArray = document["workouts"].AsBsonArray;
                var workoutList = workoutsArray.Select(x => x.ToString()).ToList();
                resultDictionary["workouts"] = workoutList;

               resultList.Add(resultDictionary);
            }
            return new JsonResult(resultList);
        }
    }
}
