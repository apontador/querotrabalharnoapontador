package br.com.apontador.controller;

import java.util.Optional;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.apontador.service.LocationService;

@Path("/locations")
public class LocationController {

	private static final int DEFAULT_PAGE_SIZE = 3;

	@Inject
	LocationService locationService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@QueryParam("page") Optional<Integer> pageParam,
						@QueryParam("pageSize") Optional<Integer> pageSizeParam,
						@QueryParam("name") Optional<String> nameParam) {
    	var page = pageParam.orElse(1);
    	var pageSize = pageSizeParam.orElse(DEFAULT_PAGE_SIZE);
        var locations = nameParam.isEmpty()
				? locationService.findPageable(page, pageSize)
				: locationService.findByNamePageable(nameParam.get(), page, pageSize);
        return Response.ok(locations).build();
    }

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response post(LocationDTO location) {
    	locationService.create(location);
		return Response.ok().build();
	}
}