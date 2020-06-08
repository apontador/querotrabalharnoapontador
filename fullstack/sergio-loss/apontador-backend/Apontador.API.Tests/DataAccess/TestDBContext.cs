using Apontador.API.DataAccess.DTO;
using LiteDBContext;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;

namespace Apontador.API.Tests.DataAccess
{
    public class TestDBContext : LiteDbContext
    {
        public LiteDbSet<Place> Places { get; set; }

        public TestDBContext(IOptions<LiteDbContextOptions> options) : base(options)
        {
            ConfigureDB();
        }

        public TestDBContext(LiteDbContextOptions options) : base(options)
        {
            ConfigureDB();
        }

        private void ConfigureDB()
        {
            Places = new LiteDbSet<Place>(liteDatabase);
        }
    }
}
