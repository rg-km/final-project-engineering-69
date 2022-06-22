package repository

import "database/sql"

type ProfileRepository struct {
	db *sql.DB
}

func NewProfileRepository(db *sql.DB) *ProfileRepository {
	return &ProfileRepository{db: db}
}

func (p *ProfileRepository) GetProfile() ([]User, error) {
	var profiles []User

	rows, err := p.db.Query("SELECT * FROM users")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var profile User
		err := rows.Scan(&profile.ID, &profile.Nama, &profile.Email, &profile.Password)
		if err != nil {
			return nil, err
		}
		profiles = append(profiles, profile)
	}

	return profiles, nil
}
