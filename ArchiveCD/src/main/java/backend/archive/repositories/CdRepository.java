package backend.archive.repositories;

import backend.archive.entities.Cd;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CdRepository extends JpaRepository<Cd,Long> {
}