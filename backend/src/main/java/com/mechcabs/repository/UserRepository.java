package com.mechcabs.repository;

import com.mechcabs.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Optional;

@Repository
public class UserRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private RowMapper<User> userRowMapper = new RowMapper<User>() {
        @Override
        public User mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new User(
                    rs.getLong("id"),
                    rs.getString("phone"),
                    rs.getString("password"),
                    rs.getString("role"),
                    rs.getTimestamp("created_at")
            );
        }
    };

    public int save(User user) {
        String sql = "INSERT INTO users (phone, password, role) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, user.getPhone(), user.getPassword(), user.getRole());
    }

    public Optional<User> findByPhone(String phone) {
        String sql = "SELECT * FROM users WHERE phone = ?";
        return jdbcTemplate.query(sql, userRowMapper, phone).stream().findFirst();
    }
}
