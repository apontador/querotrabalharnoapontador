using Apontador.API.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Apontador.API.Util
{
    public static class ApiHelper
    {
        public static ErrorResponse ParseApiErrorMessage(Exception ex)
        {
            var errorResponse = new ErrorResponse();

            errorResponse.Source = ex.Source;

            errorResponse.Errors.Add(new ErrorModel()
            {
                FieldName = "Message",
                Message = ex.Message
            });

            return errorResponse;
        }

        public static ErrorResponse ParseApiInternalErrorMessage(ILogger logger, Exception ex)
        {
            if (logger != null)
            {
                logger.LogError(ex.ToString());
            }

            var errorResponse = new ErrorResponse();

            errorResponse.Source = ex.Source;

#if DEBUG
            /*
             * In DEBUG mode should return a "complete" error message
             * */

            errorResponse.Errors.Add(new ErrorModel()
            {
                FieldName = "Message",
                Message = ex.Message
            });

            errorResponse.Errors.Add(new ErrorModel()
            {
                FieldName = "InnerException",
                Message = (ex.InnerException != null) ? ex.InnerException.Message : string.Empty
            }); ;


#else

            /*
             * In Production show a friendly error message
             * */
            errorResponse.Errors.Add(new ErrorModel()
            {
                FieldName = "Message",
                Message = "Internal Server Error. Please Contact System Administrator."
            });

#endif

            return errorResponse;

        }


        public static string GetApplicationRoot()
        {
            return Directory.GetParent(System.Reflection.Assembly.GetExecutingAssembly().Location).FullName;
        }

        public static string GetApplicationPath()
        {
            var exePath = Path.GetDirectoryName(System.Reflection.Assembly.GetExecutingAssembly().CodeBase);
            Regex appPathMatcher = new Regex(@"(?<!fil)[A-Za-z]:\\+[\S\s]*?(?=\\+bin)");
            var appRoot = appPathMatcher.Match(exePath).Value;
            return appRoot;
        }

        internal static string GetDatabaseFilePath()
        {
#if DEBUG
            return GetApplicationPath() + "\\DataFiles\\Apontador.db";
#else
            return GetApplicationRoot() + "\\DataFiles\\Apontador.db";
#endif
        }
    }
}
