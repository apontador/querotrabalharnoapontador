using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Apontador.API.Models
{
    public class ErrorResponse
    {
        public string Source { get; set; }
        public List<ErrorModel> Errors { get; set; } = new List<ErrorModel>();
    }
}
