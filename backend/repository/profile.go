package repository

import (
	"github.com/jmoiron/sqlx"
)

type EditProfileRepository struct {
	db *sqlx.DB
}

type EditProfileErrorResponse struct {
	Error string `json:"error"`
}

type EditProfile struct {
	Nama   string `json:"nama"`
	Email  string `json:"email"`
	Gender string `json:"gender"`
	No_hp  string `json:"no_hp"`
}

type EditProfileSuccesResponse struct {
	EditProfile []EditProfile `json:"editProfile"`
}

func EditProdileRepository(db *sqlx.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) EditProfile(nama string, email string, gender string, no_hp string) ([]EditProfile, error) {
	_, err := u.db.Exec("UPDATE users SET nama = ?, email = ?, gender = ?, no_hp = ? WHERE email = ?", nama, email, gender, no_hp, email)
	if err != nil {
		return nil, err
	}

	return nil, nil

}
