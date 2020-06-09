using Apontador.API.DataAccess.DTO;
using LiteDBContext;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Apontador.API.DataAccess
{
    public class LiteDbContext : LiteDBContext.LiteDbContext
    {
        public LiteDbSet<Place> Places { get; set; }

        public LiteDbContext(IOptions<LiteDbContextOptions> options) : base(options)
        {
            ConfigureDB();
        }

        public LiteDbContext(LiteDbContextOptions options) : base(options)
        {
            ConfigureDB();
        }

        private void ConfigureDB()
        {
            Places = new LiteDbSet<Place>(liteDatabase);
        }
    }
}
