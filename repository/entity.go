package repository

type User struct {
	ID        int     `json:"id"  db:"id"`
	Nama      string  `json:"nama"  db:"nama"`
	Email     string  `json:"email"  db:"email"`
	Password  string  `json:"password"  db:"password"`
	CreatedAt *string `json:"created_at"  db:"created_at"`
	UpdatedAt *string `json:"updated_at"  db:"updated_at"`
}

type Biodata struct {
	ID           int    `json:"biodata_id"`
	Nama         string `json:"nama"`
	JenisKelamin string `json:"jenis_kelamin"`
	NoHP         string `json:"no_hp"`
	Alamat       string `json:"alamat"`
}
