package br.com.apontador.service;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import br.com.apontador.model.Location;
import br.com.apontador.model.LocationEntity;
import io.quarkus.panache.common.Page;

@ApplicationScoped
public class LocationServiceImpl implements LocationService {

	@Override
	public Pageable<Location> findPageable(int pageNumber, int pageSize) {
		var query = LocationEntity.findAll().page(Page.of(pageNumber - 1, pageSize));
		return PageImpl.of(query.list(), pageNumber, query.pageCount());
	}

	@Override
	public Pageable<Location> findByNamePageable(String name, int pageNumber, int pageSize) {
		var query =  LocationEntity
				.find("name like ?1", "%" + name + "%")
				.page(Page.of(pageNumber - 1, pageSize));
		return PageImpl.of(query.list(), pageNumber, query.pageCount());
	}

	@Transactional
	@Override
	public Location create(Location location) {
		var newLocation = LocationEntity.ofLocation(location);
		newLocation.persistAndFlush();
		return newLocation;
	}
}
