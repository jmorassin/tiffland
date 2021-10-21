package com.jmdev.tiffland.cucumber;

import com.jmdev.tiffland.TifflandApp;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.web.WebAppConfiguration;

@CucumberContextConfiguration
@SpringBootTest(classes = TifflandApp.class)
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
