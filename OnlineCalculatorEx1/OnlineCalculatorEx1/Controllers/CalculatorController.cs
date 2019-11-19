using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace OnlineCalculatorEx1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        [HttpGet("GetFiveRandomNumbers")]
        public List<int> GetFiveRandomNumbers()
        {
            var numbers = new List<int>();
            var rnd = new Random();
            int count = 0;
            while (count < 5)
            {
                int newNum = rnd.Next(1, 21);
                if (!numbers.Contains(newNum))
                {
                    numbers.Add(newNum);
                    count++;
                }
            }
            return numbers;
        }
        [HttpGet("Func8StringUnite")]
        public string stringUnite(string str1, string str2)
        {
            return (str1 + " " + str2);
        }
        [HttpGet("Func9ChangeLetter")]
        public string changeLetter(string str1)
        {
            string str2="";
            foreach (char c in str1)
            {
                str2 += (Convert.ToChar(c + 1)); 
            }
            return str2;
        }
        [HttpGet("Func13MathOnNumbers")]
        public List<int> mathNumbers(int num1, int num2)
        {
            var sum = new List<int>();
            sum.Add(num1 + num2);
            sum.Add(num1 - num2);
            sum.Add(num1 * num2);
            if (num2 == 0)
            {
                return sum;
            }
            else
            {
                sum.Add(num1 / num2);
            }
            return sum;
        }
        [HttpGet("Func6RepeatedWord")]
        public int repeatedWord(string str)
        {
            List<String> str1List;
            List<String> newList;
            str1List = str.Split(' ').ToList();
            int countM = 0;
            int countT = 0;
            string elem = str1List[0];
            while (str1List.Count() != 0)
            {
                newList = str1List.FindAll(s => s.Equals(elem)).ToList();
                str1List.RemoveAll(s => s.Equals(elem));
                countT = newList.Count();
                if (countM < countT)
                {
                    countM = countT;
                }
                if (str1List.Count() != 0)
                {
                    elem = str1List[0];
                }
            }
            return countM;
        }
        [HttpGet("Func19CountDown")]
        public List<int> countDown(int num)
        {
            var numbers = new List<int>();
            for (int i = num-1; i > 0 ;--i)
            {
                if (i <= 0)
                {
                    return numbers;
                }
                numbers.Add(i);
            }
            return numbers;
        }
    }
}
