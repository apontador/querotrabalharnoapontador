using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Apontador.API.Util
{
    public static class CastModel
    {
        public static TToModel Cast<TFromModel, TToModel>(TFromModel instance)
        {
            Type type = typeof(TFromModel);
            if (type.Name != "Object")
            {
                var serialized = JsonConvert.SerializeObject(instance);
                return JsonConvert.DeserializeObject<TToModel>(serialized);
            }

            return JsonConvert.DeserializeObject<TToModel>(instance.ToString());
        }
    }
}
