using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Apontador.API.Util
{
    public static class DirectoryServices
    {
        public static void CreateDataDirectory()
        {
            string path = string.Format("{0}\\DataFiles", ApiHelper.GetApplicationRoot());

#if DEBUG
            path = string.Format("{0}\\DataFiles", ApiHelper.GetApplicationPath());
#endif


            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
        }
    }
}
