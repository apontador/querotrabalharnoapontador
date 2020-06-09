package br.com.apontador.service;

import java.util.List;

import br.com.apontador.model.Location;

public interface LocationService {
	Pageable<? extends Location> findPageable(int page, int pageSize);
	Pageable<? extends Location> findByNamePageable(String name, int page, int pageSize);
	Location create(Location location);
}
