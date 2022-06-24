package repository

import (
	"github.com/jmoiron/sqlx"
)

type UserRepository struct {
	db *sqlx.DB
}

type ProfileErrorResponse struct {
	Error string `json:"error"`
}

type Profile struct {
	Name  string `json:"nama"`
	Email string `json:"email"`
}

type ProfileSuccesResponse struct {
	Profile []Profile `json:"profile"`
}

func NewUserRepository(db *sqlx.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (u *UserRepository) FetchUsers() ([]User, error) {
	var users []User

	rows, err := u.db.Query("SELECT * FROM users")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	for rows.Next() {
		var user User
		err := rows.Scan(&user.ID, &user.Nama, &user.Email, &user.Password, &user.Gender, &user.No_hp, &user.CreatedAt, &user.UpdatedAt)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	return users, nil
}

func (u *UserRepository) Login(email string, password string) (*User, error) {
	users := &User{}
	err := u.db.Get(users, "SELECT * FROM users WHERE email = ? AND password = ? ", email, password)
	return users, err
}

func (u *UserRepository) Register(nama string, email string, password string, gender string, no_hp string) error {
	_, err := u.db.Exec("INSERT INTO users (nama, email, password, gender, no_hp) VALUES (?, ?, ?, ?, ?)", nama, email, password, gender, no_hp)
	if err != nil {
		return err
	}

	return nil
}

func (u *UserRepository) UpdateUser(id string, nama string, email string, password string, gender string, no_hp string) error {
	_, err := u.db.Exec("UPDATE users SET nama = ?, email = ?, password = ?, gender = ?, no_hp = ? WHERE email = ?", nama, email, password, gender, no_hp, email)
	if err != nil {
		return err
	}

	return nil
}

func (u *UserRepository) DeleteUser(id string) error {
	_, err := u.db.Exec("DELETE FROM users WHERE id = ?", id)
	if err != nil {
		return err
	}

	return nil
}

func (u *UserRepository) CheckUser(email string) (string, error) {
	var user User
	sqlStatement := "SELECT email FROM users WHERE email = ?"

	err := u.db.QueryRow(sqlStatement, email).Scan(&user.Email)
	if err != nil {
		return "", err
	}

	return user.Email, nil
}

func (p *UserRepository) GetProfile() ([]User, error) {
	users := []User{}
	err := p.db.Select(&users, "SELECT * FROM users WHERE email = ?")
	return users, err
}
