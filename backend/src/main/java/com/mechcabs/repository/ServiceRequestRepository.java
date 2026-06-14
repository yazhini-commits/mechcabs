package com.mechcabs.repository;

import com.mechcabs.model.ServiceRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class ServiceRequestRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private RowMapper<ServiceRequest> requestRowMapper = new RowMapper<ServiceRequest>() {
        @Override
        public ServiceRequest mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new ServiceRequest(
                    rs.getLong("id"),
                    rs.getLong("user_id"),
                    rs.getString("service_type"),
                    rs.getString("status"),
                    rs.getString("location"),
                    rs.getTimestamp("created_at")
            );
        }
    };

    public int save(ServiceRequest request) {
        String sql = "INSERT INTO service_requests (user_id, service_type, status, location) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, request.getUserId(), request.getServiceType(), request.getStatus(), request.getLocation());
    }

    public List<ServiceRequest> findByUserId(Long userId) {
        String sql = "SELECT * FROM service_requests WHERE user_id = ?";
        return jdbcTemplate.query(sql, requestRowMapper, userId);
    }
}
