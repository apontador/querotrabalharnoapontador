package br.com.apontador.service;

import java.util.List;

import com.google.common.collect.ImmutableList;

import br.com.apontador.model.Location;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;

@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class PageImpl implements Pageable<Location> {

	private List<Location> locations;
	private final int page;
	private final int pageCount;

	@Override
	public int getPage() {
		return page;
	}

	@Override
	public int getPageCount() {
		return pageCount;
	}

	@Override
	public List<Location> getItems() {
		return locations;
	}

	public static Pageable<Location> of(List<? extends Location> locations, int page, int pageCount) {
		return new PageImpl(ImmutableList.copyOf(locations), page, pageCount);
	}
}
