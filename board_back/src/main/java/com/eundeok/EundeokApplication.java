package com.eundeok;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.eundeok.board.mapper")
public class EundeokApplication {

	public static void main(String[] args) {
		SpringApplication.run(EundeokApplication.class, args);
	}

}
