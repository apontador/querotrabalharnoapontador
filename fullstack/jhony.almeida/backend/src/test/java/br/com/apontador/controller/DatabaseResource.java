package br.com.apontador.controller;

import java.util.Collections;
import java.util.Map;

import org.testcontainers.containers.MySQLContainer;

import io.quarkus.test.common.QuarkusTestResourceLifecycleManager;

public class DatabaseResource implements QuarkusTestResourceLifecycleManager {
	private static final String JDBC_URL_PROPERTY = "quarkus.datasource.jdbc.url";
	private static final String JDBC_USER_PROPERTY = "quarkus.datasource.username";
	private static final String JDBC_PASSWORD_PROPERTY = "quarkus.datasource.password";

	private MySQLContainer mySQLContainer;

	@Override
	public Map<String, String> start() {
		mySQLContainer = new MySQLContainer("mysql").withDatabaseName("apontador");
		mySQLContainer.start();
		return Map.of(
				JDBC_URL_PROPERTY, mySQLContainer.getJdbcUrl(),
				JDBC_USER_PROPERTY, mySQLContainer.getUsername(),
				JDBC_PASSWORD_PROPERTY, mySQLContainer.getPassword());
	}

	@Override
	public void stop() {
		if (mySQLContainer != null) {
			mySQLContainer.close();
		}
	}
}
