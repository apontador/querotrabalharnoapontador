package br.com.apontador.service;

import java.util.List;

public interface Pageable<T> {
	int getPage();
	int getPageCount();
	List<T> getItems();
}
