package com.jmdev.tiffland;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.jmdev.tiffland");

        noClasses()
            .that()
            .resideInAnyPackage("com.jmdev.tiffland.service..")
            .or()
            .resideInAnyPackage("com.jmdev.tiffland.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.jmdev.tiffland.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
