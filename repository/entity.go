package repository

import "time"

type User struct {
	ID        string    `json:"user_id"`
	Nama      string    `json:"nama"`
	Email     string    `json:"email"`
	Password  string    `json:"password"`
	Role      string    `json:"role"`
	Loggedin  bool      `json:"loggedin"`
	Token     string    `json:"token"`
	CreatedAt time.Time `json:"created_at"`
}

type Biodata struct {
	ID           string    `json:"biodata_id"`
	Nama         string    `json:"nama"`
	JenisKelamin string    `json:"jenis_kelamin"`
	NoHP         string    `json:"no_hp"`
	Alamat       string    `json:"alamat"`
	CreatedAt    time.Time `json:"created_at"`
}